
const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    host: 'h58.servidorhh.com',
    port: 587,
    secure: false,
    auth: {
        user: 'suporte@petspotadote.com.br',
        pass: 'Federal2@@'
    }
})
 async function envia_email(email, senha) {

   const info = await transporte.sendMail({
        from: 'PETSPOT RECUPERAÇÃO DE SENHA <suporte@petspotadote.com.br>',
        to: `${email}`,
        subject: 'Esse email e da pagina Petspot',
        html: `<h1>RECUPERAÇÃO DE SENHA</h1><br><h2>Sua senha é: ${senha}</h2>`,
        text: `Suporte Petspotadote`
     });

}

module.exports = envia_email;




