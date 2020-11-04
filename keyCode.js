const insert = document.getElementById('insert')


window.addEventListener('keydown',(e)=>{
 const {key , keyCode ,code} = e; 
 insert.innerHTML = `
 
 <div class="key">
 ${e.key == ' ' ? 'Space ' : key}
 <small>event.key</small>
 </div>
 <div class="key">
 ${e.keyCode}
 <small>event.keyCode</small>
 </div>
 <div class="key">
 ${e.code}
 <small>event.code</small>
 </div>
 
 
 
 
 `
})