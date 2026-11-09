// Efek mengetik (tanpa library)
(function () {
  var el = document.getElementById("typing");
  if (!el) return;
  var words = ["Full Stack Developer", "Laravel Developer", "Web Developer"];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = words[0]; return; }

  var w = 0, i = 0, deleting = false;
  function tick() {
    var word = words[w];
    el.textContent = word.slice(0, i);
    var delay = deleting ? 45 : 85;
    if (!deleting && i === word.length) { deleting = true; delay = 1600; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
    i += deleting ? -1 : 1;
    setTimeout(tick, delay);
  }
  tick();
})();

// Tandai menu yang sedang aktif saat scroll
(function () {
  var links = document.querySelectorAll(".nav nav a[href^='#']");
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && map[e.target.id]) {
        links.forEach(function (a) { a.classList.remove("active"); });
        map[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(map).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();

// Tahun otomatis di footer
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
