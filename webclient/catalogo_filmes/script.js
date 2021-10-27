const http = new EasyAjax
http.get('https://rafaelescalfoni.github.io/desenv_web/filmes.json', function(status, response){
    if(status){
        console.log(status);
    } else {

        let aux = '';
        let ages = [];

    
        response.forEach(data => {
            const showRating = document.createElement("div");
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

            
            } eachForLoops();

            aux += `<div class="card">
            <div class="movie">
                <div class="imageContainer">
                    <img src=${data.figura}>
                </div>
                <div class="reviews">
                    ${opinioesAux}
                </div>
            <div class="description">
                <h1>${data.titulo}</h1>
                ${showRating.outerHTML}
                <h4>${data.resumo}</h4>
                
                <hr> 
                
                <div class="showInfo">
                <div class="cast">
                    <ul>
                        ${castAux}
                    </ul>
                </div>
                <div clas="similar">
                    <ul>
                        ${similarAux}
                    </ul>
                </div>
                <div class ="genrers">
                    <ul>
                        ${generosAux}
                    </ul>
                </div>
            </div>
            </div>
            </div>
        </div>`; 

        document.querySelector('.movies').innerHTML = aux;

        /*ages.push(data.classificacao);
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
                else if (ages[k] = 18) element.classList.toggle('red');*/
                
            });
    }

});

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});