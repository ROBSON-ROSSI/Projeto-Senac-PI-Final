var btn_voltar = document.getElementById('bt-voltar');
var btn_next = document.getElementById('bt-next');
var btn_card = document.querySelector('.btn-card');
const imagens = document.querySelectorAll('.div-banner img');
const box = document.querySelector('.div-banner');
var contador = 0;  
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var carrossel_testemunhos = document.getElementById('img-testemunhos1');
var btn_aceito = document.getElementById('btn-aceito');
var btn_rejeito = document.getElementById('btn-rejeito');
var cookies = document.querySelector('.ativo');


//Novo carrossel automatico



function slide() {
  contador++;

  if(contador > imagens.length -1){
    contador = 0;
  }
box.style.transform = `translateX(${-contador * box.clientWidth}px)`;
}   

setInterval(slide, 7000);

//==========================================================================================


btn_aceito.addEventListener('click', () => {
    cookies.style.visibility = 'hidden';
});

btn_rejeito.addEventListener('click', () => {
  cookies.style.visibility = 'visibility';
});




//=====================================================================
//ESSE BLOCO EXECUTA O CARROSSEL DOS TESTEMUNHOS
var controle = 0;

function next_testemunhos (){

 const ida = setInterval(() => {

     if(controle == -1440){
        clearInterval(ida);
        back_testemunhos();
     } else {
      controle += -360;
      carrossel_testemunhos.style.marginLeft = controle +'px';
      carrossel_testemunhos.style.transition = '2s';

     }
    
     
  },100);

}

function back_testemunhos (){

  const voltar = setInterval(() => {
 
      if(controle == 0){
         clearInterval(voltar);
         next_testemunhos();
      } else {
       controle += +360;
       carrossel_testemunhos.style.marginLeft = controle +'px';
       carrossel_testemunhos.style.transition = '2s';
 
      }
     
      
   },3000);
 
 }
next_testemunhos(); // CHAMA A FUNÇÃO PARA INICIAR O CARROSSEL AUTOMATICO

//======================================================================================================

// CARROSSEL TESTEMUNHOS VERSÃO MOBILE
var marg = 0; 
btn_voltar2.addEventListener('click', () => {

  if(marg == -1920) {
    btn_voltar2.style.visibility = 'hidden';
    marg = marg + 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '3s';
  } else {
  
  marg = marg + 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '3s';
  btn_next2.style.visibility = 'visible';
  }
});

btn_next2.addEventListener('click', () => {
  if(marg == -3840){
    btn_next2.style.visibility = 'hidden';
    marg = marg - 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '3s';
  
  } else {
  btn_voltar2.style.visibility = 'visible';
  marg = marg - 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '3s';

  }
});
