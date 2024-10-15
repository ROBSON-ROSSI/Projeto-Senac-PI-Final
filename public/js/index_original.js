var btn_voltar = document.getElementById('bt-voltar');
var btn_next = document.getElementById('bt-next');
var btn_card = document.querySelector('.btn-card');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var carrossel_testemunhos = document.getElementById('img-testemunhos1');
var btn_aceito = document.getElementById('btn-aceito');
var btn_rejeito = document.getElementById('btn-rejeito');
var cookies = document.querySelector('.ativo');


btn_aceito.addEventListener('click', () => {
    cookies.style.visibility = 'hidden';
});

btn_rejeito.addEventListener('click', () => {
  cookies.style.visibility = 'visibility';
});


//ESSE BLOCO EXECUTA O CARROSSEL PELO CLICK NAS SETAS
//================================================================
var marg = 0; 
btn_voltar.addEventListener('click', () => {

  if(marg == -1920) {
    btn_voltar.style.visibility = 'hidden';
    marg = marg + 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '3s';
  } else {
  
  marg = marg + 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '3s';
  btn_next.style.visibility = 'visible';
  }
});

btn_next.addEventListener('click', () => {
  if(marg == -3840){
    btn_next.style.visibility = 'hidden';
    marg = marg - 1920;
    img1.style.marginLeft = `${marg}`+'px';
    img1.style.transition = '3s';
  
  } else {
  btn_voltar.style.visibility = 'visible';
  marg = marg - 1920;
  img1.style.marginLeft = `${marg}`+'px';
  img1.style.transition = '3s';

  }
});


//EXECUTA O CARROSSEL AUTOMATICO
//=======================================================================
function proximo(){

const next = setInterval( () => {
  if(marg > -5760){
    
    btn_next.click();
  } else {
  
    clearInterval(next);
    voltar();
    
  }
},10000)
}



function voltar(){

  const back = setInterval(()=>{
    if(marg == 0){
      clearInterval(back);
      proximo();
    } else {
      btn_voltar.click();
    }
    
  },10000);

}

proximo();

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
