
const url = 'https://pokeapi.co/api/v2/pokemon/'
const title = document.getElementById('title')
const imageCard = document.querySelector(".imageCard")

//Save poke id for prev and next button
let savePokeId = 0

//Loop list add all pokemons
const ul = document.querySelector(".listUl")


// request API search()
function pokeSearch(search) {

    fetch(search)
    .then((response) => response.json())
    .then(poke => {
        return edit(poke), savePokeId = poke
    })
       
    .catch(function(error) {
        console.log(error);
    })
};

// Searching
function poke() {
    const par = document.querySelector('.input').value
    let search = url + par
    return pokeSearch(search)
};

// edit book
function edit(poke) {
    //name
    title.innerHTML =  poke.id + '#' + poke.name;
    
    
    // Get Animation gif
    // Searching-gif in generation-v, black-white, animated
    let animation = poke.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
    let checkSprite = poke.sprites["front_default"]

    // if sprite and animation === null, then official-artwork
    if (animation === null && checkSprite === null) {
        imageCard.src = poke.sprites.other["official-artwork"]["front_default"]
    } 
    // if animation === null, then Sprite
      else if(animation === null) {
        imageCard.src = poke.sprites["front_default"]
    } 
    // else, have animation
      else {
        //gif (animation)
        imageCard.src = animation;
    }  
    let types = poke.types

    for (typelist of types) {
        console.log(typelist.type)
        //as imagens já estão presentes
        // cria uma função pra adicionar elas e tá pronto
    }
    

};

// control Previous & Next
function control(prev, next) {
    let id = savePokeId.id
    const par = document.querySelector('.input').value

    //Prev
    if (prev > next && id > 1) {
       let prev = id - 1
       let search = url + prev
       pokeSearch(search)
    //Next
    } else if (next > prev) {
        //id undefined
        if (id === undefined) {
            let search = url + 1
            pokeSearch(search)
        }
        //id normal
        else {
        let next = id + 1
        let search = url + next
        pokeSearch(search)
        }
    }
};

function clickList(id) {
    let search = url + id
    pokeSearch(search)
}

function load(start, end) {  

    for (let id = start; id <= end ; id++) { 
        let search = url + id

        fetch(search)
       .then((response) => response.json())
       .then(poke => {
           let buttonList = document.createElement('button')
           buttonList.setAttribute("class", "pokeList")
           buttonList.setAttribute("id", id)
           buttonList.setAttribute("onclick", "clickList(id)")
   
   
           let listName = poke.name
           let pokeId = poke.id
           buttonList.innerHTML = pokeId + "#" + listName
   
           ul.appendChild(buttonList)
       })
          
       .catch(function(error) {
           console.log(error);
       })
   }
}

function gen(gen) {

    // 1 - 151
if (gen === 1){
    ul.innerHTML= ''
 load(1, 151)
} 
    // 152 - 251
else if (gen === 2) {
    ul.innerHTML= ''
 load(152, 251)
}
    // 252 - 386
else if (gen === 3) {
    ul.innerHTML= ''
 load(252, 386)  
}
    // 387 - 493
else if(gen === 4 ) {
    ul.innerHTML= ''
 load(387, 493)
}
    // 494 - 649
else if(gen === 5 ) {
    ul.innerHTML= ''
 load(494, 649)
}
    // 650 - 721
else if(gen === 6 ) {
    ul.innerHTML= ''
 load(650, 721)
}
    // 722 - 809
else if(gen === 7 ) {
    ul.innerHTML= ''
 load(722, 809)
}
    // 810 - 905
else if (gen === 8 ) {
    ul.innerHTML= ''
 load(810, 905)
}
}
