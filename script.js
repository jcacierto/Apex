// Smooth scrolling for in-page links, instead of a direct jump.
document.addEventListener("DOMContentLoaded", function(){document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener("click", function(e){var id=a.getAttribute("href"); if(id.length>1){var el=document.querySelector(id); if(el){e.preventDefault(); el.scrollIntoView({behavior:"smooth", block:"start"});}}});});});
// Reveal sections as they scroll into view.
document.addEventListener("DOMContentLoaded", function(){var els=document.querySelectorAll(".reveal"); if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on"); io.unobserve(e.target);}});},{threshold:0.15}); els.forEach(function(el){io.observe(el);});} else {els.forEach(function(el){el.classList.add("on");});}});
// Fallback: if the Three.js placeholder fails to load, show the static placeholder.
setTimeout(function(){var d=document.getElementById('placeholder-3d'); var f=document.getElementById('model-fallback'); if(d && !d.querySelector('canvas') && f){f.style.display='block';}},4000);
