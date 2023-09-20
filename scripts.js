var cont = 0;


for (var i = 1; i <= 200; i++) {
    cont++;
    $.get(`https://pokeapi.co/api/v2/pokemon/${cont}`, preencherCard);

}

function preencherCard(data){

    var Html = ""

    Html = "<div class='main'> "

    Html += "<div class='banner'> <img src='' alt=''> </div> <div class='body'> "
    Html += `<h2>${data.name}</h2> <p>Tipo: Tipo do Pokémon</p> <p>Número da Pokédex: #001</p> </div> </div>`    
     $("#container").append(Html)
               

    //console.log(data.name)
}



