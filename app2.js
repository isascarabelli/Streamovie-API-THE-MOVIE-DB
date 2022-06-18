const API_KEY = "65b85b5abed51668d3bc3089da156554";

function exibeFilmes(){
    let divTela = document.getElementById('tela');
    let texto = '';

    //Montar texto html dos filmes
    let dados = JSON.parse (this.responseText);
    let links = {};

    for(i = 0; i < 8; i++){
        let movie = dados.results[i];

        links[i] = movie.poster_path;
        
    };

    texto = texto + `
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[0]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[1]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[2]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[3]}" alt="filme no cinema api the movie db">
                </div>   
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[4]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[5]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[6]}" alt="filme no cinema api the movie db">
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 div-img">
                    <img class="img-destaque" src="https://image.tmdb.org/t/p/w200${links[7]}" alt="filme no cinema api the movie db">
                </div>   
            </div>
        </div>`
        ;

    //Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa(){
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `
    
https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
    xhr.send();
}

onload = () => {
    executaPesquisa();
    console.log("oi")
}



