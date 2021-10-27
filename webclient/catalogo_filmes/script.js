const http = new EasyAjax
http.get('https://rafaelescalfoni.github.io/desenv_web/filmes.json', function(status, response){
    if(status){
        console.log(status);
    } else {

        let aux = '';
        let ages = [];


        response.forEach(data => {
            let castAux = '<h2>Elenco</h2>';
            let generosAux = '<h2>Gênero</h2>';
            let similarAux = '<h2>Similares</h2>';
            let opinioesAux = '';
            let media = 0;

            function eachForLoops() 
                {data.elenco.forEach(cast => {
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(cast));
                    castAux += li.outerHTML;
                });

                data.generos.forEach(genre => {
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(genre));
                    generosAux += li.outerHTML;
                });

                

                data.titulosSemelhantes.forEach((similar, k) => {
                    response.forEach(test => {
                        if(test.id == similar) {
                            const li = document.createElement("li");
                            li.appendChild(document.createTextNode(test.titulo));
                            similarAux += li.outerHTML;
                        }
                    });
                });

            
            } 

        document.querySelector('.movies').innerHTML = aux;

        ages.push(data.classificacao);
        });
        const movie = document.querySelectorAll('.movie');
            movie.forEach((element,k) => {
                if(ages[k] == 0){
                    element.dataset.content = '\u00a0L';
                    console.log('h1')
                } else element.dataset.content = ages[k];

                if (ages[k] <= 14) element.classList.toggle('green');
                else if(ages[k] < 18) {
                    element.classList.toggle('yellow');
                    element.style.color='black'
                }
                else if (ages[k] = 18) element.classList.toggle('red');
                
            });
    }
});