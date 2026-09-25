/* Section rail active state. Progressive enhancement only: the rail is a
   plain list of in-page links and works without this file. No storage,
   no network, no dependencies. */
(function () {
  "use strict";
  var toc = document.querySelector(".p-toc");
  if (!toc || !("IntersectionObserver" in window)) return;

  var links = {};
  var sections = [];
  Array.prototype.forEach.call(toc.querySelectorAll("a[href^='#']"), function (a) {
    var id = a.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (!sec) return;
    links[id] = a;
    sections.push(sec);
  });
  if (!sections.length) return;

  var visible = {};

  function paint() {
    var best = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible[sections[i].id]) { best = sections[i].id; break; }
    }
    Object.keys(links).forEach(function (id) {
      if (id === best) links[id].setAttribute("aria-current", "true");
      else links[id].removeAttribute("aria-current");
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    paint();
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });

  sections.forEach(function (s) { io.observe(s); });
})();
