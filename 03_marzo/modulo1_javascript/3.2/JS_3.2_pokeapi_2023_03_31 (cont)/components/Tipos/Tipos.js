import { POKEMONS, pintar } from "../Home/Home";

export const TIPOS = [];

export const initTipos = () => {
  rellenarTipos();
};

const rellenarTipos = () => {
  for (const pokemon of POKEMONS) {
    pokemon.types.forEach((tipo) => {
      if (!TIPOS.includes(tipo.type.name)) {
        TIPOS.push(tipo.type.name);
      }
    });
  }

  pintarTipos();
};

const pintarTipos = () => {
  const tipos$$ = document.querySelector("#tipos");

  for (let i = 0; i < TIPOS.length; i++) {
    const tipo$$ = document.createElement("button");

    tipo$$.textContent = TIPOS[i];

    tipo$$.addEventListener("click", () => filtrarPorTipo(TIPOS[i]));

    tipos$$.appendChild(tipo$$);
  }

  const todos$$ = document.createElement("button");

  todos$$.textContent = "TODOS";

  todos$$.addEventListener("click", () => filtrarPorTipo("todos"));

  tipos$$.appendChild(todos$$);
};

export const filtrarPorTipo = (tipo) => {

  if (tipo === "todos") {
    pintar(POKEMONS);
  } else {
    const pokemonsFiltered = POKEMONS.filter(
      (pokemon) => pokemon.types[0].type.name === tipo
    );

    pintar(pokemonsFiltered);
  }

};