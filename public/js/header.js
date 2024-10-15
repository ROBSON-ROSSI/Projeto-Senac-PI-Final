const btn_menu_header = document.querySelector('#btn-menu');
const menus_nav = document.querySelectorAll('nav a');

//Captura o click do btn_menu
btn_menu_header.addEventListener('click', () => {
    for (var i = 0; i < menus_nav.length; i++) {
        menus_nav[i].classList.toggle('mostrar_menu');
    }
});