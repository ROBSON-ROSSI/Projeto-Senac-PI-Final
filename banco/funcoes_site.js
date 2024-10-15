const sql = require('./bdpetspot');

function cadastrarPet(nome_pet, id_especie, genero, peso, imagem, data_nascimento, castrado, id_usuario) {

    sql.query(`INSERT INTO CADASTRO_PET (NOME_PET,ID_ESPECIE,GENERO,PESO,IMAGEM,DATA_NASCIMENTO,CASTRADO,ID_USUARIO) VALUES ("${nome_pet}",${id_especie},"${genero}",${peso},"${imagem}","${data_nascimento}","${castrado}",${id_usuario})`,
        (err) => {
            if (err) {
                throw err
               // console.log('Erro ao inserir no banco de dados')
            } else {
                console.log('Pet cadastrado com sucesso') 
            }

        } // FIM DA QUERY
    )


}



module.exports = cadastrarPet;