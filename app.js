// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const base ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const num = prompt("enter how many pokemon you would like to see");

// total of 898 pokemons

for(let i =1; i<=num;i++){
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon")
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const newImg = document.createElement("img");
    newImg.src = `${base}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.append(pokemon);
}

