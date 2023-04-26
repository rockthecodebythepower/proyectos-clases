import { pintar, POKEMONS } from "../Home/Home";

export const initBuscador = () => {

    const myBuscador$$ = document.querySelector("#buscador");

    const input$$ = document.createElement("input");

    input$$.setAttribute("placeholder", "Escribe aquí el nombre del pokemon que quieras buscar");

    input$$.addEventListener("input", (evento) => buscar(evento.target.value));

    myBuscador$$.appendChild(input$$);


}

const buscar = (inputValue) => {

    const pokemonsFiltered = POKEMONS.filter((pokemon) => pokemon.name.includes(inputValue));
    pintar(pokemonsFiltered);

}