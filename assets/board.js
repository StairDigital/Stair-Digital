/* ============================================================
   The Board Services panel's tilt.

   Deliberately event-driven, like liquid-glass.js and for the same reason:
   there is no loop here. Nothing runs until a pointer is actually over the
   panel, and the writes are coalesced to one per frame, so this adds
   nothing to scrolling and nothing at all to a page sitting idle.

   The rect is read once on enter and cached, rather than per pointermove -
   reading it on every move forces a synchronous layout dozens of times a
   second, which is the mistake the magnetic buttons used to make.
   ============================================================ */
(function () {
  "use strict";

  var card = document.querySelector('.bsv-card');
  if (!card) return;

  /* A phone has nothing to hover with, and a tilt that follows a thumb
     reads as a glitch. Matches the CSS, which only applies the transform
     under the same query. */
  if (!(window.matchMedia && window.matchMedia('(hover:hover)').matches &&
        window.matchMedia('(pointer:fine)').matches)) return;
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  var MAX = 3.2;            /* degrees - any more and the type starts to swim */
  var box = null, raf = null, rx = 0, ry = 0;

  function paint() {
    raf = null;
    card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
  }

  card.addEventListener('pointerenter', function () {
    box = card.getBoundingClientRect();
  }, { passive: true });

  card.addEventListener('pointermove', function (e) {
    if (!box) box = card.getBoundingClientRect();
    if (!box.width || !box.height) return;
    var px = (e.clientX - box.left) / box.width - 0.5;
    var py = (e.clientY - box.top) / box.height - 0.5;
    ry = px * MAX * 2;
    rx = -py * MAX * 2;
    if (!raf) raf = requestAnimationFrame(paint);
  }, { passive: true });

  card.addEventListener('pointerleave', function () {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    box = null;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }, { passive: true });

  /* A cached rect is wrong the moment the page reflows. */
  window.addEventListener('resize', function () { box = null; }, { passive: true });
})();
