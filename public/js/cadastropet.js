const especieSelect = document.querySelector('#tipos-pets')
//FUNÇÃO PAGINA LANDPAGE 
// async function lerCardPets(){
//     const resolve = await fetch('/lercards');
//     const data =  await resolve.json();
//     console.log(data);
// }

// lerCardPets();


async function carregaEspecies(){
    const resolve = await fetch('/carregaformulario');
    const data = await resolve.json();
    
    data.forEach(texto => {
        var options = document.createElement('option');
        options.value = texto.id_especie;
        options.innerText = texto.tipo_especie;
        especieSelect.appendChild(options);
    });
}

carregaEspecies();

