/* ============================================================
   ENGAGEMENTS — the only script this page needs.

   It replaces three: a WebGL wave field, an SVG blob morpher and a 34-chip
   3D ring that wrote a transform every frame. Between them they made this
   the slowest page on the site.

   Nothing here runs on a loop. Three jobs, all of them one-shot or driven
   by a click:

     1. the voices enter once, staggered, when the wall comes into view
     2. the figures count up once, when the strip comes into view
     3. the sector chips filter the wall

   Every observer disconnects after firing, and each piece has a failsafe,
   because a wall of testimonials that depends on JavaScript to be visible
   is a wall of testimonials that is sometimes invisible.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------------------------------------------------------------
     1. The wall
     --------------------------------------------------------------- */
  var wall = document.getElementById('egWall');
  if (wall) {
    var cards = Array.prototype.slice.call(wall.querySelectorAll('.eg-card'));
    var countEl = document.getElementById('egCount');
    var shown = cards.slice();

    function reveal(list, fast) {
      list.forEach(function (c, i) {
        /* capped so a long list never leaves the last card waiting seconds */
        var d = reduce ? 0 : Math.min(i * (fast ? 22 : 55), fast ? 260 : 520);
        setTimeout(function () { c.classList.add('in'); }, d);
      });
    }

    function tally() {
      if (!countEl) return;
      countEl.textContent = shown.length === cards.length
        ? 'Showing all ' + cards.length + ' voices'
        : 'Showing ' + shown.length + ' of ' + cards.length + ' voices';
    }

    /* entrance: once, when the wall arrives */
    if (!reduce && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (e) {
        if (!e[0].isIntersecting) return;
        io.disconnect();
        reveal(cards, false);
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });
      io.observe(wall);
      /* if the observer never fires, the quotes still appear */
      setTimeout(function () { reveal(cards, true); }, 2600);
    } else {
      cards.forEach(function (c) { c.classList.add('in'); });
    }
    tally();

    /* ---- filtering ---- */
    var chips = Array.prototype.slice.call(document.querySelectorAll('.eg-chip'));
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var key = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', String(c === chip));
        });

        shown = [];
        cards.forEach(function (c) {
          var keep = (key === 'all') || c.getAttribute('data-group') === key;
          /* dropped out of flow entirely, so the columns re-pack cleanly
             rather than leaving holes where a hidden card used to be */
          c.classList.toggle('out', !keep);
          if (keep) { shown.push(c); c.classList.remove('in'); }
        });
        /* re-enter on the next frame so the transition has a start state */
        requestAnimationFrame(function () { reveal(shown, true); });
        tally();
      });
    });
  }

  /* ---------------------------------------------------------------
     2. The figures
     --------------------------------------------------------------- */
  var nums = Array.prototype.slice.call(document.querySelectorAll('.eg-n'));
  if (nums.length) {
    function runCount(el) {
      var to = parseFloat(el.getAttribute('data-to')) || 0;
      if (reduce) { el.textContent = String(to); return; }
      var dur = 1100, t0 = 0;
      function frame(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        /* ease-out, so it lands rather than stops */
        var v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        el.textContent = String(v);
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = String(to);   /* exact on the last frame */
      }
      requestAnimationFrame(frame);
    }

    if ('IntersectionObserver' in window) {
      var seen = false;
      var fio = new IntersectionObserver(function (e) {
        if (!e[0].isIntersecting || seen) return;
        seen = true; fio.disconnect();
        nums.forEach(runCount);
      }, { threshold: 0.3 });
      fio.observe(nums[0].closest('.eg-figs') || nums[0]);
      setTimeout(function () {
        if (seen) return;
        seen = true;
        nums.forEach(function (el) { el.textContent = el.getAttribute('data-to'); });
      }, 3000);
    } else {
      nums.forEach(function (el) { el.textContent = el.getAttribute('data-to'); });
    }
  }
})();
