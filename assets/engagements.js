/* ============================================================
   ENGAGEMENTS — a safety net for reveals.

   Anything carrying .rv starts at opacity:0 and only becomes visible when
   the scroll batch in site.js adds .in. When that does not fire, the
   content is simply invisible - which is how the only call to action on
   this page came to be missing until something else forced a repaint.

   This clears every .rv on the page a few seconds after load regardless.
   It fires long after the normal reveal, so when everything is working it
   changes nothing; it only matters on the day something is not.

   (The rotating quotes on this page are driven by the small inline scripts
   at the foot of engagements.html, which carry their own curated lines.)
   ============================================================ */
(function () {
  "use strict";
  setTimeout(function () {
    var hidden = document.querySelectorAll('.rv:not(.in)');
    for (var i = 0; i < hidden.length; i++) hidden[i].classList.add('in');
  }, 2800);
})();
