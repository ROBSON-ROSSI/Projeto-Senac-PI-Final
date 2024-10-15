var imagens = document.querySelectorAll('.car_contaner img');
const box = document.querySelector('.car_contaner');
var contador = 0; 
var tela = 0; 



// window.addEventListener('resize',() => {
//     atualiza_imagens();
    
 

// });

setInterval(slide,5000);

function slide(){
      contador++;

      if(contador > imagens.length -1){
        contador = 0;
      }

     if(box.clientWidth > 1920){
       tela = 1920;
       
      } else {
          atualiza_imagens();
          tela = box.clientWidth;

      }

  box.style.transform = `translateX(${-contador * tela}px)`;
}  

function atualiza_imagens () {
  
  if(tela > 1280){
    imagens[0].setAttribute('src','imagens/BANNERS_1920PX/Banner_1.png');
    imagens[1].setAttribute('src','imagens/BANNERS_1920PX/Banner_2.png');
    imagens[2].setAttribute('src','imagens/BANNERS_1920PX/Banner_3.png');
    }  

if(tela > 800 && tela <= 1280) {
  imagens[0].setAttribute('src','imagens/BANNERS_1280PX/Banner_1.png');
  imagens[1].setAttribute('src','imagens/BANNERS_1280PX/Banner_2.png');
  imagens[2].setAttribute('src','imagens/BANNERS_1280PX/Banner_3.png');
 }

 if(tela > 400 && tela <= 800) {
  imagens[0].setAttribute('src','imagens/BANNERS_800PX/Banner_1.png');
  imagens[1].setAttribute('src','imagens/BANNERS_800PX/Banner_2.png');
  imagens[2].setAttribute('src','imagens/BANNERS_800PX/Banner_3.png');
 }

 if(tela <= 400) {
  imagens[0].setAttribute('src','imagens/BANNERS_400PX/Banner_1.png');
  imagens[1].setAttribute('src','imagens/BANNERS_400PX/Banner_2.png');
  imagens[2].setAttribute('src','imagens/BANNERS_400PX/Banner_3.png');
 }

};


