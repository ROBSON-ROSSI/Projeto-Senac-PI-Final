const imagem = document.querySelector('.image');
    const nomePet = document.querySelector('.rectangle h2');
    const informacoes = document.querySelector('.rectangle p');
    const msg_pet = document.querySelectorAll('section p');
    
    msg_pet.addEventListener('click',()=> {
        alert('teste')
    })
    nomePet.textContent = `${<%= nome %>}`;
    imagem.setAttribute('src', `${<%= imagem %>}`);
    informacoes.innerHTML = `${<%= informacoes %>}`;
    msg_pet[0].innerHTML = "teste de texto"
    // async function puxarDados() {
    //     const resolve = await fetch(`/filtrar/`);
    //     const data = await resolve.json();

    //     // Exibir dados
    //     data.forEach(dados => {
    //         nomePet.textContent = `${dados.nome_pet}`;
    //         imagem.setAttribute('src', dados.imagem);
    //         informacoes.innerHTML = `Idade: 5 anos <br> Espécie: Gato`;
    //     });
    // }

    // puxarDados();