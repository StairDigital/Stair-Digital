/* ============================================================
   Round Carousel (vanilla port of the Originkit React component)
   A 3D ring of images that turns on its own and can be dragged.
   Targets [data-roundcarousel]; images come from data-images (comma list)
   or data-count + data-prefix/data-pad for numbered files.
   Pauses when hidden or scrolled out of view.
   ============================================================ */
(function () {
  "use strict";

  function num(el, attr, dflt) {
    var v = parseFloat(el.getAttribute(attr));
    return isNaN(v) ? dflt : v;
  }

  function init(host) {
    /* ---- gather sources ---- */
    var srcs = (host.getAttribute('data-images') || '')
      .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (!srcs.length) {
      var count = num(host, 'data-count', 0);
      var prefix = host.getAttribute('data-prefix') || '';
      var ext = host.getAttribute('data-ext') || '.jpg';
      for (var i = 0; i < count; i++) {
        srcs.push(prefix + (i < 10 ? '0' + i : '' + i) + ext);
      }
    }
    if (!srcs.length) return;

    var n = srcs.length;
    var imageWidth = num(host, 'data-width', 300);
    var imageHeight = num(host, 'data-height', 300);
    var spacing = num(host, 'data-spacing', 3);
    var speed = num(host, 'data-speed', 7);
    var dirLeft = (host.getAttribute('data-direction') || 'right') === 'left';
    var sensitivity = num(host, 'data-sensitivity', 5);
    var tilt = num(host, 'data-tilt', -7);
    var perspective = num(host, 'data-perspective', 3000);
    var radiusPx = num(host, 'data-radius', 22);
    var innerDim = num(host, 'data-innerdim', 3.5);
    var canDrag = host.getAttribute('data-drag') !== 'false';

    var angle = 360 / n;
    var factor = 1 + spacing * 0.15;
    var ringRadius = (imageWidth * factor) / (2 * Math.tan(Math.PI / n));
    var degPerSec = speed * 6 * (dirLeft ? -1 : 1);

    /* ---- build the ring ---- */
    host.style.perspective = perspective + 'px';
    if (canDrag) host.style.cursor = 'grab';
    host.style.touchAction = 'pan-y';

    var tiltBox = document.createElement('div');
    tiltBox.className = 'rc-tilt';
    tiltBox.style.transform = 'rotateX(' + tilt + 'deg)';

    var ring = document.createElement('div');
    ring.className = 'rc-ring';
    ring.style.width = imageWidth + 'px';
    ring.style.height = imageHeight + 'px';

    for (var k = 0; k < n; k++) {
      var cell = document.createElement('div');
      cell.className = 'rc-cell';
      cell.style.transform = 'rotateY(' + (k * angle) + 'deg) translateZ(' + ringRadius + 'px)';

      var front = document.createElement('div');
      front.className = 'rc-face';
      front.style.borderRadius = radiusPx + 'px';
      front.style.backgroundImage = 'url("' + srcs[k] + '")';

      var back = document.createElement('div');
      back.className = 'rc-face rc-back';
      back.style.borderRadius = radiusPx + 'px';
      back.style.backgroundImage = 'url("' + srcs[k] + '")';
      back.style.filter = 'brightness(' + (innerDim / 10) + ')';

      cell.appendChild(front);
      cell.appendChild(back);
      ring.appendChild(cell);
    }
    tiltBox.appendChild(ring);
    host.appendChild(tiltBox);

    /* ---- spin ---- */
    var rotY = 0, vel = 0, last = 0, raf = null;
    var drag = { active: false, x: 0 };

    function apply() {
      ring.style.transform = 'translateZ(' + (-ringRadius) + 'px) rotateY(' + rotY + 'deg)';
    }
    apply();

    var vis = window.FX.watch(host);

    function draw(now) {
      if (!vis.visible()) { last = now; return; }
      var dt = last ? (now - last) / 1000 : 0;
      last = now;
      var f = Math.min(dt, 0.1);
      if (!drag.active) {
        if (Math.abs(vel) > 0.01) { rotY += vel * f; vel *= 0.94; }
        else { rotY += degPerSec * f; }
      }
      apply();
    }
    window.FX.add(draw);

    if (canDrag) {
      host.addEventListener('pointerdown', function (e) {
        if (host.setPointerCapture) { try { host.setPointerCapture(e.pointerId); } catch (x) {} }
        drag.active = true; drag.x = e.clientX; vel = 0;
        host.style.cursor = 'grabbing';
      });
      host.addEventListener('pointermove', function (e) {
        if (!drag.active) return;
        var dx = e.clientX - drag.x;
        drag.x = e.clientX;
        var kk = 0.3 * sensitivity;
        rotY += dx * kk;
        vel = dx * kk * 60;
      });
      function release(e) {
        if (host.releasePointerCapture && e.pointerId != null) {
          try { host.releasePointerCapture(e.pointerId); } catch (x) {}
        }
        drag.active = false;
        host.style.cursor = 'grab';
      }
      host.addEventListener('pointerup', release);
      host.addEventListener('pointercancel', release);
    }
  }

  /* Build the ring only once it is nearly in view.
     init() writes thirty background-image URLs, so calling it at load time
     starts thirty downloads immediately. On the Industries page the ring sits
     more than five screens down, which meant roughly two megabytes of images
     competing with the content at the top of the page for every visitor,
     including the ones who never scroll that far.
     The margin is one and a half screens, so the frames are already in the
     cache by the time anyone arrives at the section and the spin starts on a
     complete ring rather than filling in. */
  function whenNear(host) {
    var built = false;
    var io = null;

    function build() {
      if (built) return;
      built = true;
      if (io) io.disconnect();
      window.removeEventListener('scroll', near);
      window.removeEventListener('resize', near);
      init(host);
    }

    /* Failsafe, in the same spirit as the one on the book: if the observer
       never delivers - no support, or a context that is not running the
       rendering lifecycle - a decorative section must still appear rather
       than leave a hole in the page. One rect read per scroll event, and the
       listener removes itself the moment the ring is built. */
    function near() {
      var r = host.getBoundingClientRect();
      if (r.top < window.innerHeight * 2.5 && r.bottom > -window.innerHeight) build();
    }

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) build();
      }, { rootMargin: '150% 0px' });
      io.observe(host);
    }
    window.addEventListener('scroll', near, { passive: true });
    window.addEventListener('resize', near, { passive: true });
    near();
  }

  document.querySelectorAll('[data-roundcarousel]').forEach(whenNear);
})();
