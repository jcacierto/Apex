// Fallback: if the Three.js placeholder fails to load, show the static placeholder.
setTimeout(function(){var d=document.getElementById('placeholder-3d'); var f=document.getElementById('model-fallback'); if(d && !d.querySelector('canvas') && f){f.style.display='block';}},4000);
