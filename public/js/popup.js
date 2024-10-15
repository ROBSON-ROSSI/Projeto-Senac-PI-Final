const btn_popup = document.getElementById('btn-popup');
const btn_enviar = document.getElementById('btn-enviar-login');
const txt_alerta = document.getElementById('txt-msg');
const contaner_popup = document.querySelector('.contaner-popup');

if(!Cookies.get('status') ){
    
   
} else {
    contaner_popup.classList.remove('pop-close');
    txt_alerta.textContent = Cookies.get('status');
  //  Cookies.set('status','');
    Cookies.remove('status');
    
}

btn_popup.addEventListener('click',()=> {
    contaner_popup.classList.add('pop-close');
    txt_alerta.textContent = "";
});

btn_enviar.addEventListener('click',()=> {
    contaner_popup.classList.add('pop-close');
    txt_alerta.textContent = "";
})