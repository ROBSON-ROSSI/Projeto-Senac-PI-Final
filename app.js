require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const envia_email = require('./email/envia_email');
const port = process.env.port;
const app = express();
const session = require('express-session');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const route = require('./routers/site');
const msg = require('./routers/alert');
const sql = require('./banco/bdpetspot');
const consulta = require('./routers/consulta');
const CKies = require('js-cookie');
const {
    json
} = require('body-parser');
const { Socket } = require('socket.io');

// ROTAS USADAS NO PROJETO
app.use(consulta);
app.use(route);
app.use(msg);


// Funções do chat
//==================================================


//==================================================


// HABILITANDO O USO DO JSON NO SERVIDOR
app.use(express.json());



// Para reconhecer a pasta Public
app.use(express.static('./public'));

// Template da página
app.set('view engine', 'ejs');

// Configuração do CORS
app.use(cors({
    origin: "*",
    methods: "get, post, put, delete",
    AccessControlAllowOrigin: "*"
}));

//Rotas do chat 
//================================================================





io.on('connection', (socket) => {

    socket.on('UserOnline', (id, nome, imagem) => {
      //  console.log(id.id_usuario)
        sql.query(`SELECT * FROM USER_ONLINE WHERE ID_USUARIO = "${id}"`, (err,rows) => {
             if(err){
                throw err
             } else {
                if(rows.length > 0){
                    io.emit('ListaDeUser', JSON.stringify(rows));
                } else {
                   
                    sql.query(`INSERT INTO USER_ONLINE (ID_USUARIO,NOME,IMAGEM,SESSAO) VALUES ("${id}","${nome}","${imagem}","${socket.id}")`, (err) => {
                        if (err) {
                            throw err
                        }
                        sql.query('SELECT * FROM USER_ONLINE', (err, rows) => {
                                if (err) {
                                    throw err
                                }
                                io.emit('ListaDeUser', JSON.stringify(rows));
    
                            
                        })
                }) // fim sql 2

                }
             }

        })// fim sql 1   
        
       

        // sql.query(`INSERT INTO USER_ONLINE (ID_USUARIO,NOME,IMAGEM,SESSAO) VALUES (${id},"${nome}","${imagem}","")`, (err){
        //     if(err){
        //         throw err
        //     } else {
        //         sql.query('SELECT * FROM USER_ONLINE',(err,rows)=> {
        //             if(err){
        //                 throw err
        //             } else {
        //                 io.emit('ListaDeUser',JSON.stringify(rows));
        //             }
        //         })
        //     }
        // })
    })


 socket.on('disconnect', (msg) =>{
        sql.query(`DELETE FROM USER_ONLINE WHERE sessao = "${socket.id}"`, (err) => {
            if(err){
                throw err
            } else {

              sql.query('SELECT * FROM USER_ONLINE', (err, rows) => {
                    if (err) {
                        throw err
                    }
              io.emit('ListaDeUser', JSON.stringify(rows));

                
            })

            }
            
        })
    })

socket.on('Lerdados', (id, imagem, mensagem, sala, nome) => {
    var dados = [{
        id_usuario: id,
        imagem: imagem,
        nome: nome,
        sala: sala,
        mensagem: mensagem
    }]


    io.emit('MsgSala', JSON.stringify(dados))
})

});













//================================================================
// Coloca o servidor no AR
//================================================================
http.listen(port, () => {
    console.log('SERVIDOR WEB LIGADO NA PORTA 3000');
});