const mysql = require('mysql2');
const conexao = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

conexao.connect((err)=>{
    if(err){
        throw err;
    } else {
        console.log('Banco de dados conectado com sucesso!');
    }
});

module.exports = conexao;