const bcrypt = require('bcrypt');
const { decrypt } = require('dotenv');
//REALIZA A CRYPTOGRAFIA DA SENHA
async function encrypt(passwords) {

 var passcrypt = await bcrypt.hash(passwords, 10);
 console.log(passcrypt);

 return passcrypt;
    
}

async function validasenha(passfront,passback) {
   
    var status = await  bcrypt.compare(passfront,passback);

    return status;
    
}

module.exports = [encrypt,validasenha];