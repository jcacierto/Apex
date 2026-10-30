function initModel(){
  var slider=document.getElementById('model-slider'); if(!slider) return;
  var label=document.getElementById('model-angle'); var area=document.getElementById('model-area');
  var angle=0;
  function viewName(a){a=((a%360)+360)%360; if(a<30||a>330)return 'TOP VIEW'; if(a<60)return '3/4 VIEW'; if(a<120)return 'SIDE VIEW'; if(a<150)return '3/4 VIEW'; if(a<210)return 'BACK VIEW'; if(a<240)return '3/4 VIEW'; if(a<300)return 'SIDE VIEW'; return '3/4 VIEW';}
  function set(id,attrs){var el=document.getElementById(id); if(!el)return; for(var k in attrs)el.setAttribute(k,attrs[k]);}
  function render(){var c=Math.cos(angle*Math.PI/180); var ax=55*Math.abs(c); var L=100-ax,R=100+ax; set('arm-tl',{x2:L}); set('arm-bl',{x2:L}); set('arm-tr',{x2:R}); set('arm-br',{x2:R}); var rx=18*Math.abs(c)+4; set('prop-tl',{cx:L,rx:rx}); set('prop-bl',{cx:L,rx:rx}); set('prop-tr',{cx:R,rx:rx}); set('prop-br',{cx:R,rx:rx}); var bw=40*Math.abs(c)+20; set('model-body',{x:100-bw/2,width:bw}); if(label)label.textContent=Math.round(((angle%360)+360)%360)+' - '+viewName(angle); if(slider)slider.value=Math.round(((angle%360)+360)%360);}
  slider.addEventListener('input',function(){angle=parseInt(slider.value,10); render();});
  document.querySelectorAll('[data-model-angle]').forEach(function(b){b.addEventListener('click',function(){angle=parseInt(b.getAttribute('data-model-angle'),10); render();});});
  var dragging=false,lastX=0;
  if(area){area.addEventListener('pointerdown',function(e){dragging=true;lastX=e.clientX;}); window.addEventListener('pointermove',function(e){if(!dragging)return; angle+=(e.clientX-lastX)*0.5; lastX=e.clientX; render();}); window.addEventListener('pointerup',function(){dragging=false;});}
  render();
}
document.addEventListener('DOMContentLoaded',initModel);
