const imagens = document.querySelectorAll('.contaner img');
const box = document.querySelector('.contaner');
var contador = 0;  

function slide(){
      contador++;

      if(contador > imagens.length -1){
        contador = 0;
      }
   box.style.transform = `translateX(${-contador * box.clientWidth}px)`;
}   


setInterval(slide, 5000);
