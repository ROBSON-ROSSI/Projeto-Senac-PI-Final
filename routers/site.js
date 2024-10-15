require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sql = require('../banco/bdpetspot');
const email = require('../email/envia_email');
const cadpets = require('../banco/funcoes_site');
const route = express.Router();
const multer = require('multer');
const upload = multer({destination: __dirname})
const bodyparse = require('body-parser');
const fs = require('fs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const path = require('path');
const cookieParse = require('cookie-parser');
const sharp = require('sharp');
const enrypt = require('../crypto/bcrypt');
const resposta = require('../email/envia_email');
const popEmail = require('../email/envia_email');
route.use(bodyparse.urlencoded({ extended: false }));
route.use(bodyparse.json());
route.use(cookieParse());


// Rota publicas do site
//=====================================================================
route.get('/', (req, res) => { //Essa rota habilita a tela land page quando o usuario acessar a url
  
  return res.render('index');
});

route.get('/contato', (req, res) => { //Essa rota habilita a tela de contato quando o usuario acessar a url
  
  return res.render('contato');
});

// variaveis do sitemas
var nome = '';
var imagem = '';
var informacoes = '';
var mensagem = '';


route.get('/perfil_pet', (req, res) => { //Essa rota habilita a tela de perfil do pet, após clicar visualizar no card index
  
  return res.render('pet_pages',{nome,imagem,informacoes,mensagem});
});

route.get('/adocao', (req, res) => { //Essa rota habilita a tela de ADOÇÃO, visualizar todos os cards adoção
  
  return res.render('adocao');
});


route.get('/login', (req, res) => {  //Essa rota habilita a tela de login para usuario logar
  res.render('login');
});

route.get('/cadastro', (req, res) => { // Essa rota habilita a tela de cadastro do usuario
  res.render('cadastro');
});

route.get('/recuperar', (req, res) => {  // Essa rota habilita a tela para o usuario recuperar a senha dele por email
  res.render('recuperasenha');
});


// ROTA PARA:
route.post('/file',(req,res) => {

  var storage = multer.diskStorage({
      destination: function(req,file,cb){
           cb(null,__dirname)
      },
      filename: function(req,file,cb){
          cb(null,Date.now() +".png");
      },
  });

  const upload = multer({storage}).single("file");
   
  upload(req, res, function(err) {
      if (err instanceof multer.MulterError){
          return res.status(500).send(err);
      } else if (err){
          return res.status(500).send(err);
      }
     console.log(req.file.filename);

      res.status(200).send({"mensaagem": "Arquivo envviado com sucesso"})
      
  })
  
});

route.get('/carregaformulario',(req,res) => { // essa rota carrega os dados do campo especie na tela cadastro de pet
    sql.query('SELECT * FROM ESPECIES',(err,rows) => {
      if(err){
        throw err
      } else { 
          res.json(rows);
      }
    })
})

// ROTA PARA PUXAR TODOS OS CADASTROS DOS PETS
route.get('/carregarCards',(req,res) => { // Essa rota carrega os cards da tela land page inicial da area adoção do pet
     sql.query('SELECT * FROM CADASTRO_PET',(err,rows) =>{
        if(err){
          throw err
        } else {
            res.json(rows);
        }
     }
    )  
});



route.get('/lercards',(req,res) => {
     res.json({
          pets: {
              "id_pet": 1,
               "nome_pet": "Milena",
               "idade": "3 anos",
               "Genero": "Femêa",
               "Castrado": "Sim",
               "imagem":"imagens/logo.png"
          }
     })
})

route.get('/filtrar/:id_pet',(req,res) => { // Essa rota realizado o filtro dos pet pelo id_Pet
  sql.query(`SELECT * FROM cadastro_pet WHERE id_pet = ${req.params.id_pet}`,(err,row) => {
    if (err) {
      throw err
    } else {
      row.forEach(dados => {
        nome = dados.nome_pet;
        imagem = dados.imagem;
        informacoes = "Idade: 4 anos ";
        mensagem = dados.mensagem;
        res.redirect('/perfil_pet');
         
      })
     // res.render('pet_pages',{dados: row});
    }
  })
});



// Todas as Funções de validação de usuario
//==========================================================================
function verifyJWT(req, res, next) {
const token = req.cookies.token;
jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).redirect('/login');
    req.userid = decoded.userid;
    next();
  })
}

function valida_login(req, res, next) { // Essa função valida o login do usuario se ele existe ou não

  var email = req.body.user;
  var pass = req.body.password;
  //res.clearCookie('DadosUser');
 

 sql.query(`SELECT * FROM USUARIO WHERE EMAIL= "${email}" and SENHA= "${pass}"`, (err, rows) => {
    if (err) {
      return res.render('login', { alert: true, msg: "Falha ao consultar banco de dados" })
    } else if (rows.length > 0) {
     
      route.use(session({
        key: 'UserId',
        secret: 'Petspot2024',
        resave: true,
        saveUninitialized : true,
        cookie:{secure : false,}
        
      }));

      var infouser = [];
      
      
    rows.forEach(dados =>{
        infouser.push(`${dados.id_usuario}`);
        infouser.push(`${dados.nome_usuario}`);
        infouser.push(`${dados.email}`);
        infouser.push(`${dados.imagem}`);
        res.cookie('id_usuario', `${dados.id_usuario}`, '');
        res.cookie('DadosUser',JSON.stringify(infouser));
      
      });
      
   
    
      next();
    } else {

      return res.cookie('status', "Usuario ou senha invalida", '').redirect('/login');

    }
  })

}

//==========================================================================

//Rotas protegidas
//===========================================================================

route.get('/editar_pet/:id_pet',verifyJWT, (req, res) => { //Essa rota habilita a tela editar cadastro dos pets quando o usuario estiver logado
  sql.query(`SELECT * FROM cadastro_pet WHERE id_pet = ${req.params.id_pet}`,(err,row) => {
    if (err) {
      throw err
    } else {
      row.forEach(dados => {
        nome = dados.nome_pet;
        imagem = dados.imagem;
        informacoes = "20-09-2005";
        res.redirect('/editar_pet');
         
      })
     
    }
  }
  
  )

});

route.get('/meus_pets',verifyJWT,(req,res)=> {
      res.render('meus_pets');
})

route.post('/cadastrarpet',verifyJWT,(req,res) => {
  var diretorio = path.join(__dirname,'../','/public/imagens/pets');

  //console.log(diretorio)
  var storage = multer.diskStorage({
    destination: function(req,file,cb){
         cb(null, diretorio);
    },
    filename: function(req,file,cb){
        cb(null,Date.now() +".png");
    }  

});


const upload = multer({storage}).single("file");
 
upload(req, res, function(err) {
    if (err instanceof multer.MulterError){
        return res.status(500).send(err);
    } else if (err){
        return res.status(500).send(err);
    }
 //  console.log(req.file.filename);
   
   sharp(`${diretorio}/${req.file.filename}`).resize(
    {
      width: 400,
      height: 267,
      kernel: sharp.kernel.nearest,
      fit : 'cover',
      position: 'center'

    
    }).toFile(`${diretorio}/_${req.file.filename}`)
   .then((infor) => 
    { 
      //console.log(infor)
    })
.catch((err) => { console.log(err)});
  
   sql.query(`INSERT INTO CADASTRO_PET (NOME_PET,ID_ESPECIE,GENERO,PESO,IMAGEM,DATA_NASCIMENTO,CASTRADO,ID_USUARIO,MENSAGEM) VALUES ("${req.body.name}",${req.body.especies},"${req.body.genero}","${req.body.peso}","imagens/pets/_${req.file.filename}","${req.body.data_nascimento}","${req.body.castrado}",${req.cookies.id_usuario},"${req.body.mensagem}")`,
    (err) => {
        if (err) {
        
         return res.cookie('status', "Falha ao cadastrar seu pet.", '').redirect('/cadastrarpet');
        } else {
          return res.cookie('status', "Cadastro realizado com sucesso.", '').redirect('/meus_pets');
        }

    } // FIM DA QUERY

    
)  
}) // fim do bloco upload
  
})


route.get('/pets_usuario',verifyJWT,(req,res) => { // Essa rota realizado o filtro dos pet pelo id_Pet
  sql.query(`SELECT * FROM cadastro_pet WHERE id_usuario = ${req.cookies.id_usuario}`,(err,row) => {
    if (err) {
      throw err
    } else {
      res.json(row);
    }
  })
})

route.get('/editar_pet',verifyJWT, (req, res) => { //Essa rota habilita a tela editar cadastro dos pets quando o usuario estiver logado
  
  return res.render('editarCadPet', {nome, mensagem:imagem, data_nascimento:"20-09-2005"});
});

route.get('/logout',verifyJWT,(req,res)=>{
  // res.clearCookie('DadosUser');
   res.clearCookie('token');
   res.clearCookie('id_usuario');   
  return res.redirect('/');
 });

route.get('/chat', verifyJWT, (req, res) => { // Essa rota habilita a tela do chat quando ele estiver logado
  console.log(req.userid)
  res.render('chat');
});

route.get('/userpage', verifyJWT, (req, res) => { // Essa rota habilita a tela pagina do usuario quando ele estiver logado.
  console.log(req.userid)
  res.render('userpage');
});

route.get('/cadpets',verifyJWT,(req, res) => { // Essa rota habilita a tela de cadastro do pet quando o usuario estiver logado
 
    res.render('cadastroPet');
});


route.post('/logar', valida_login, (req, res) => { // Essa rota vefirica se o usuario pode ou não fazer o login
  //var user_imagem = JSON.parse(req.cookies.DadosUser);
  var SECRET = process.env.SECRET;
  var token = jwt.sign({ userid: req.hostname }, SECRET, { expiresIn: 6000 });
 

 
 // var user_imagem = JSON.parse(req.cookies.DadosUser);

  
  //,{imagem: `${user_imagem[3]}`,nome: `${user_imagem[1]}`}


 
 
 return res.cookie('token', token, '').render('meus_pets');
 

});

//===========================================================================

// Rotas para autenticação do usuario e gereção do token
//============================================================================



//Rotas com funções no banco de dados
//==============================================================================

route.post('/recuperar', (req, res) => { //Essa rota verifica se usuario existe e recupera a senha dele e envia para o email dele.
  sql.query(`SELECT EMAIL,SENHA FROM USUARIO WHERE EMAIL="${req.body.user}"`, (err, rows) => {
    if (err) {
      return res.status(500).end({ status: 500, menssagem: "Erro na comunicação com o servidor" })
    } else if (rows.length > 0) {

      rows.forEach((dados) => {
        email(dados.EMAIL, dados.SENHA).then((msg) => {
          return res.cookie('status', "Email enviado com sucesso...", '').redirect('/login')
        }
        ).catch(() => {
          return res.cookie('status', "Falha ao enviar o email.", '').redirect('/recuperar');
        });

      })
    } else {
      return res.cookie('status', "Esse email não esta cadastrado", '').redirect('/recuperar');
    }


  });
})

//ESSA FUNÇÃO CADASTRA O USUARIO NO BANCO DE DADOS
function registrar(req, res, next) { // Essa rota realiza o cadastro do usuario no sistema.

  if (!req.body.name) {
    return res.cookie('status', "Preencha o seu nome.", '').redirect('/cadastro');

  }

  if (!req.body.user) {
    return res.cookie('status', "Preencha o seu Email.", '').redirect('/cadastro');

  }

  if (!req.body.password) {

    return res.cookie('status', "Preencha a sua senha.", '').redirect('/cadastro');

  }

  sql.query(`SELECT * FROM USUARIO WHERE EMAIL= "${req.body.user}"`, (err, rows) => {
    if (err) {
      throw err
      //res.status(403).json({ msg: "Falha no sistema, tente mais tarde" });
      return res.cookie('status', "Falha ao comunicar com o servidor.", '').redirect('/cadastro');

    } else if (rows.length > 0) {
      //res.status(403).json({ msg: "Esse email ja esta cadastrado" });
      return res.cookie('status', "Esse email ja esta cadastrado.", '').redirect('/cadastro');
    } else {

      sql.query(`INSERT INTO USUARIO (NOME_USUARIO,EMAIL,SENHA,IMAGEM) VALUES("${req.body.name}",LOWER("${req.body.user}"),"${req.body.password}","imagens/user.svg")`, (err) => {
        if (err) {
          return res.cookie('status', "Falha ao comunicar com o banco de dados.", '').redirect('/cadastro');

        } else {
          
          next();
        }
      })

    }

  }
  )

}

//================================================================================

route.post('/registrar', registrar, (req, res) => {
  return res.cookie('status', "Cadastro realizado com sucesso.", '').redirect('/login');

});

// ROTA PARA FORMULÁRIO DE CONTATO
route.post('/contato', (req,res) => {

});



module.exports = [route];


