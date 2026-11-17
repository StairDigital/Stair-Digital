/* The AI Auditor opens itself once, when it comes into view.

   Everything about the motion is CSS transitions on a single .open class
   (see book.css). All this does is decide when to add it, so there is no
   scroll handler and nothing measured per frame. */
(function () {
  "use strict";
  var bkx = document.getElementById('bookScroll');
  if (!bkx) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { bkx.classList.add('no-anim'); return; }

  /* Watch the BOOK, not the section.

     The observer used to watch the whole section at a 0.35 threshold. The
     section is taller than the book - it carries the title block underneath -
     so a third of it could be on screen while the book itself was still
     below the fold, and the jacket swung open before there was anything to
     see. Watching the stage, and waiting until most of it is in view, means
     the book opens while you are looking at it. */
  var stage = bkx.querySelector('.bkx-stage') || bkx;

  var io = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    bkx.classList.add('open');
    io.disconnect();               /* it opens once; it never closes again */
  }, { threshold: 0.6 });

  io.observe(stage);

  /* Failsafe, so the book can never sit shut with its content hidden behind
     the jacket if the observer misfires. It used to fire unconditionally
     four seconds after load, which meant that on a long page the book had
     already opened by the time anyone scrolled to it and the animation
     appeared never to happen. Now it only forces the issue if the section
     is actually on screen and still shut. */
  setInterval(function () {
    if (bkx.classList.contains('open')) return;
    var r = stage.getBoundingClientRect();
    /* the stage is more than half on screen */
    if (r.top < window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.25) {
      bkx.classList.add('open');
    }
  }, 1200);
})();
