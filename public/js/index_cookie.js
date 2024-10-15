const cookieOpen = document.querySelector('.div-cookie');
const btnAceito = document.querySelector('#btn-aceito');
const btnRejeitar = document.querySelector('#btn-rejeito');

if(Cookies.get('ck')){
    cookieOpen.classList.remove('popup-cookie');
} else {
    cookieOpen.classList.add('popup-cookie');
}

btnAceito.addEventListener('click',()=>{
     Cookies.set('ck','Aceito');
  
     cookieOpen.classList.remove('popup-cookie');
})

btnRejeitar.addEventListener('click',()=>{

 
    cookieOpen.classList.remove('popup-cookie');
})