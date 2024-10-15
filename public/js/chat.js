const btnMostraEmoji = document.getElementById('btn-emoji');
const listaEmojis = document.querySelector('.div-lista-emoji');
const listaEmojisClick = document.querySelectorAll('.div-lista-emoji img');
const fechaListaOline = document.querySelector('.fecha-lista-online');
const listaUsuarioOnline = document.querySelector('.div-contaner-online');
const btnMenu = document.querySelector('.ico-menu');
const chat = document.querySelector('.div-chat-msg');
const ListaOnline = document.querySelector('.lista-online-usuarios');
const campoMsg = document.querySelector('#txt-msg');
const BtnSendMsg = document.querySelector('#btn_send');
const btn_message = document.querySelectorAll('.div-msg-botoes img');
var resp = JSON.parse(Cookies.get('DadosUser'));

function addEmoji(){
    for (let index = 0; index < listaEmojisClick.length; index++) {
       listaEmojisClick[index].addEventListener('click',()=>{
        listaEmojis.classList.toggle('close-emoji');
        campoMsg.value = campoMsg.value + `<img class="emj" src="${listaEmojisClick[index].getAttribute('src')}"></img>`; 
        BtnSendMsg.click();
       })
        
    }
}

setInterval(()=> {
  chat.scrollTop = chat.scrollHeight;
},200)

addEmoji();

campoMsg.addEventListener('keypress',(e) => {
    
    if(e.key == "Enter" && campoMsg.value != ''){
        BtnSendMsg.click();
        e.preventDefault();
        
    } else {
       
    }  
})

function criacardsEmoji(id,nome,imagem,mensagem,emoji){
    var cardChat = document.createElement('div');
    cardChat.className ='msgchat';
    var P_nome = document.createElement('p');
    var Fotousuario = document.createElement('img');
    if(imagem == ''){
       Fotousuario.setAttribute('src', 'imagens/user.svg');
    } else {
       Fotousuario.setAttribute('src', `${imagem}`);
    }
    Fotousuario.setAttribute('src', `${imagem}`);
    P_nome.appendChild(Fotousuario);
    var nomeuser = document.createElement('span');
    nomeuser.textContent = `${nome}`;
    P_nome.appendChild(nomeuser);
    var P_msg = document.createElement('p');
    var P_emoji = document.createElement('p');
    P_emoji.className = 'img_emoji';
    //var foto_emoji = document.createElement('img');
    //P_emoji.appendChild(foto_emoji);
    P_msg.textContent = mensagem;
    cardChat.appendChild(P_nome);
    cardChat.appendChild(P_msg);
    cardChat.appendChild(P_emoji);
    chat.appendChild(cardChat);
   
}

function criacards(id,nome,imagem,mensagem){
     var cardChat = document.createElement('div');
     cardChat.className ='msgchat';
     var P_nome = document.createElement('p');
     var Fotousuario = document.createElement('img');
     if(imagem == ''){
        Fotousuario.setAttribute('src', 'imagens/user.svg');
     } else {
        Fotousuario.setAttribute('src', `${imagem}`);
     }
     Fotousuario.setAttribute('src', `${imagem}`);
     P_nome.appendChild(Fotousuario);
     var nomeuser = document.createElement('span');
     nomeuser.textContent = `${nome}`;
     P_nome.appendChild(nomeuser);
     var P_msg = document.createElement('p');
     var P_emoji = document.createElement('p');
     P_emoji.className = 'img_emoji';
     //var foto_emoji = document.createElement('img');
     //P_emoji.appendChild(foto_emoji);
     P_msg.innerHTML = mensagem;
     cardChat.appendChild(P_nome);
     cardChat.appendChild(P_msg);
     cardChat.appendChild(P_emoji);
     chat.appendChild(cardChat);
    
}

const UserDados = [{
    nome: `${resp[1]}`,
    id: `${resp[0]}`,
    msg: `${campoMsg.value}}`,
    imagem: `${resp[3]}`
}]

console.log(UserDados[0].nome);

const socket = io();
var msgssala ='';

var salaMsg = [];
btn_message[2].addEventListener('click',()=> {
   
    if(campoMsg.value == ""){

    } else {
        GravarDados(resp[0],resp[3],campoMsg.value,'Teste',resp[1]);
        campoMsg.value = '';
    }
     
   

});
//'MsgSala'
socket.on('MsgSala',(msgtxt) => {
    var DadoCards = JSON.parse(msgtxt);
    console.log(msgtxt)
    DadoCards.map(info => {
       criacards(info.id_usuario,info.nome,info.imagem,info.mensagem); 
    })
    console.log(socket.id);
})

function UserOnline(idUser,imagemUser,NomeUser){
  
    const card = document.createElement('div');
    const card_btn = document.createElement('div');
    const img_card = document.createElement('img');
    const img_icon1 = document.createElement('img');
    const img_icon2 = document.createElement('img');
    const img_icon3 = document.createElement('img');
    const nome_card = document.createElement('p');
    
    card.className = 'card-usuario-online';
    card.setAttribute('id',`${idUser}`)
    img_card.setAttribute('src',`${imagemUser}`);
    card.appendChild(img_card);
    nome_card.textContent = `${NomeUser}`;
    card.appendChild(nome_card);
    card_btn.className ='div-button-card';
    img_icon1.setAttribute('src','imagens/icones/icones_camera.png');
    img_icon2.setAttribute('src','imagens/icones/message_preview.svg');
    img_icon3.setAttribute('src','imagens/icones/whatsapp.svg');
    
    card_btn.appendChild(img_icon1);
    card_btn.appendChild(img_icon2);
    card_btn.appendChild(img_icon3);

    card.appendChild(card_btn);
    
    ListaOnline.appendChild(card);
    
   }

  

   socket.on('ListaDeUser', (textMsg) => {
      var userlist = JSON.parse(textMsg);
      userlist.map(txt => {
          if(txt.id_usuario == resp[0] ){
              
          } else {
            UserOnline(txt.id_usuario,txt.imagem,txt.nome);
            
         }
           
         
          
      })
     
      
   })

   

 socket.on('disconnect',()=>{
    socket.emit(resp[0]);
 })  

socket.on('connect', (err) => {
    if (err) {
        throw err
    } else {
        var data = new Date();

      socket.emit('UserOnline',socket.id,resp[1],resp[3]);

    }


});

function GravarDados(id,imagem,mensagem,sala,nome){
    socket.emit('Lerdados',id,imagem,mensagem,sala,nome);
}

socket.on('sala',(message)=> {
   // salaMsg.push(message);
   // salaMsg.push(msgssala);
    //chat.innerHTML= `${message}`;
    criacards(message)
})

socket.on('message',(message,cards) => {
    
  //  chat.innerHTML= `${message}`;
  //  ListaOnline.innerHTML = `${cards}`
})





//var txt = JSON.parse(resp);


btnMostraEmoji.addEventListener('click', () => {
    listaEmojis.classList.toggle('close-emoji');
})

fechaListaOline.addEventListener('click', () => {
    listaUsuarioOnline.classList.toggle('close-lista');
})

btnMenu.addEventListener('click', () => {

    listaUsuarioOnline.classList.toggle('close-lista');
})