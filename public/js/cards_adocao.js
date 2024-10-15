const cardAdocao = document.querySelector('.cards-adocao');

async function carregaCards(){
    const respostaa = await fetch('/carregarCards');
    const animais = await respostaa.json();
    var cardPet ='';
    animais.forEach(pet => {
   
       
         cardPet += `<div class="div-card-doacao">
                        <div class="div-img-card">
                            <img src="${pet.imagem}" alt="">
                        </div>
                        <div class="div-dados-animal">
                            <p>Nome: ${pet.nome_pet}</p>
                            <p>Data: ${pet.data_nascimento}</p>
                        </div>
                        <div class="div-botao">
                        <br>
                            <a id="${pet.id_pet}" href="#">Visualizar</a>
                        </div>
                    </div>`

        
    });

    cardAdocao.innerHTML = cardPet;

}; 

carregaCards();

async function GerarLinks () {
   await carregaCards();
   const btn_visualizar = document.querySelectorAll('.cards-adocao .div-botao a');
   for(let i = 0; i < btn_visualizar.length; i++){

   btn_visualizar[i].setAttribute("href","/filtrar/"+ btn_visualizar[i].getAttribute('id'));
    }  

}

GerarLinks();


