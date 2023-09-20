var cont = 0;

ordem = []

for (var i = 1; i <= 200; i++) {
    cont++;
    
    $.get(`https://pokeapi.co/api/v2/pokemon/${cont}`, preencherCard) 

    
    
    
 
}

function preencherCard(data){

    const types = data.types;

    console.log(data.sprites.front_default)
    
    var Html = ""

    Html = "<div class='main'> "

    Html += "<div class='banner'>   "
    Html += `<img src='${data.sprites.front_default}' alt='' </div> <div class='body'>`
    Html += `<h2>${data.name}</h2> <p>Tipo: `    


    for (var i = 0; i < types.length; i++) {
        Html += `${types[i].type.name} `;
    }

    Html += `</p> <p>Número da Pokédex: #${data.id}</p> </div> </div>`
     $("#container").append(Html)
               
}






