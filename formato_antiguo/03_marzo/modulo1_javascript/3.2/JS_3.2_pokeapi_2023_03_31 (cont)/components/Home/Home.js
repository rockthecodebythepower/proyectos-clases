import { myApp$$ } from "../../main"
import { initCombate, seleccionarCombate } from "../Combate/Combate";
import { initTipos } from "../Tipos/Tipos";
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

    initTipos();
    initCombate();
    pintar(POKEMONS);

}

export const pintar = (pokemons) => {

    myApp$$.innerHTML = "";
    for (const pokemon of pokemons) {

        //! creo los elementos
        const pokemon$$ = document.createElement("div");
        const nombre$$ = document.createElement("h3");
        const img$$ = document.createElement("img");

        //! les doy el contenido
        pokemon$$.className = "pokemon";
        img$$.src = pokemon.sprites.other.dream_world.front_default;
        img$$.setAttribute("width", "50px");
        nombre$$.textContent = pokemon.name;

        //! funcionalidad de los elementos
        img$$.addEventListener("mouseover", (e) => cambiarImagen(e, pokemon));
        pokemon$$.addEventListener("click", () => seleccionarCombate(pokemon));

        //! inserto en el documento
        pokemon$$.appendChild(nombre$$);
        pokemon$$.appendChild(img$$);
        myApp$$.appendChild(pokemon$$);
    }
    if (pokemons.length === 0) {
        myApp$$.innerHTML += `
            <div class="pokemon">
                <h3>No se ha encontrado el pokemon que buscabas</h3>
                <img width="350px" src="https://media.tenor.com/Hr44Q6SDMMUAAAAd/pokemon.gif"/>
            </div>
        `
    }

}

const cambiarImagen = (e, pokemon) => {

    if (e.target.src === pokemon.sprites.other.dream_world.front_default) {
        e.target.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_shiny;
    } else {
        e.target.src = pokemon.sprites.other.dream_world.front_default;
    }  

}