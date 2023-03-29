import { myApp$$ } from "../../main"
import "./Home.css"

export const POKEMONS = [];

export const initHome = () => {

    peticion(150);

}

const peticion = async (cantidad) => {

    for (let i = 1; i <= cantidad; i++) {
        
        const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const pokemon = await resultado.json();

        POKEMONS.push(pokemon);
        
    }

    pintar(POKEMONS);

}

export const pintar = (pokemons) => {

    myApp$$.innerHTML = "";
    for (const pokemon of pokemons) {
        myApp$$.innerHTML += `
            <div class="pokemon">
                <h3>${pokemon.name}</h3>
                <img width="50px" src="${pokemon.sprites.other.dream_world.front_default}"/>
            </div>
        `
    }

}