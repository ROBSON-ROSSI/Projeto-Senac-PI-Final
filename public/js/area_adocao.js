const card_adocao = document.querySelector('.galeria-adoçao');

 async function carCards(){
    const resposta = await fetch('/carregarCards');
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
                <a id="${animal.id_pet}" href="#">Visualizar</a>
            </div>
        </div>`

        
    });

   card_adocao.innerHTML = cards;

}; 

async function GerarLinks () {
   await carCards();
   const btn_visualizar = document.querySelectorAll('.galeria-adoçao .div-botao a');
   for(let i = 0; i < btn_visualizar.length; i++){

   btn_visualizar[i].setAttribute("href","/filtrar/"+ btn_visualizar[i].getAttribute('id'));
    
    
   }
   

}

GerarLinks();


 
  






