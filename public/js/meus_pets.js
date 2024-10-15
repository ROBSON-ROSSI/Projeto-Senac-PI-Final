const card_adocao = document.querySelector('.galeria-adoçao');
const fotoPerfil = document.querySelector('.profile-pic');
const fotoPerfil2 = document.querySelector('.profile');
const NomeUser = document.querySelector('.menu-text h2');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const menu = document.getElementById('menu');

//Lendo os cookeis do usuario

var DadosUser = JSON.parse(Cookies.get('DadosUser'));
fotoPerfil.setAttribute('src',`${DadosUser[3]}`);
fotoPerfil2.setAttribute('src',`${DadosUser[3]}`);
NomeUser.textContent = DadosUser[1];


 async function carCards(){
    const resposta = await fetch('/pets_usuario');
    const animal = await resposta.json();
    var cards ='';
    animal.forEach(animal => {
   
       
         cards += `<div class="div-card-doacao">
                      <div class="div-img-card">
                          <img src="${animal.imagem}" alt="">
                      </div>
                      <div class="div-dados-animal">
                          <p>Nome: ${animal.nome_pet}</p>
                          <p>Data: ${animal.data_nascimento}</p>
                      </div>
                      <div class="div-botao">
                        <br>
                          <a id="${animal.id_pet}" href="/editar_pet">Editar</a>
                      </div>
                  </div>`

        
    });

   card_adocao.innerHTML = cards;

}; 

async function GerarLinks () {
   await carCards();
   const btn_visualizar = document.querySelectorAll('.galeria-adoçao .div-botao a');
   for(let i = 0; i < btn_visualizar.length; i++){

   btn_visualizar[i].setAttribute("href","/editar_pet/"+ btn_visualizar[i].getAttribute('id'));
    
    //
   }
   

}

GerarLinks();





  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show'); // Alterna a classe 'show' para mostrar/ocultar o menu
  });

  closeIcon.addEventListener('click', () => {
    menu.classList.remove('show'); // Remove a classe 'show' para esconder o menu
  });