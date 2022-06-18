const API_KEY = "65b85b5abed51668d3bc3089da156554";

function exibeFilmes(){
    let divTela = document.getElementById('tela');
    let texto = '';

    //Montar texto html dos filmes
    let dados = JSON.parse (this.responseText);

    for(i = 0; i < dados.results.length; i++){
        let movie = dados.results[i];
        console.log(movie.poster_path)

        texto = texto + `
        <div class="box-filmes">
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}"><br>
                <span class="nome"><b>Nome:</b> ${movie.title}</span><br>
                <span class="id"><b>ID:</b> ${movie.id}</span><br>
                <span class="popularity"><b>Popularidade:</b> ${movie.popularity}</span><br>
                <a href="https://www.themoviedb.org/movie/${movie.id}${movie.title}">Mais informações</a><br><br>
        </div>
        ` 
        ;
    };

    //Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
    xhr.send();
}


document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);
