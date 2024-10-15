    
fetch('http://10.24.89.45:3000/consulta').then((respose) => respose.json()).then((data)=> {
                var imagem = document.querySelector('#fotos');
                console.log(data);
                   data.map(foto => {
                      console.log(foto.imagem)
                      imagem.setAttribute('src',foto.imagem);
                   
                   })
                  
                }).catch(()=> {
            console.log('Erro na API')
           })