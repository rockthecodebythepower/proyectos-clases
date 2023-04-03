import { filtrarPorTipo } from "../Tipos/Tipos";
import "./Combate.css";

let COMBATE = {
  pokemon1: null,
  pokemon2: null,
  ganador: null,
};

export const initCombate = () => {
  crearTerrenoDeJuego();
};

const crearTerrenoDeJuego = () => {
  const pokemon1$$ = document.querySelector(".pokemon1");
  const pokemon2$$ = document.querySelector(".pokemon2");
  const ganador$$ = document.querySelector(".ganador");

  pokemon1$$.innerHTML = `
        <img class="imagen1" src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"/>
    `;
  pokemon2$$.innerHTML = `
    <img class="imagen2" src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"/>
    `;
  ganador$$.innerHTML = `
    <img class="imagenGanador" src="https://media.giphy.com/media/diIo4NFqtLSlW/giphy.gif"/>
    `;
};

export const seleccionarCombate = (pokemon) => {
  const imagen1$$ = document.querySelector(".imagen1");
  const imagen2$$ = document.querySelector(".imagen2");

  if (!COMBATE.pokemon2) {
    if (COMBATE.pokemon1) {
      COMBATE.pokemon2 = pokemon;
      imagen2$$.src =
        pokemon.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_shiny;
      iniciarCombate();
    } else {
      COMBATE.pokemon1 = pokemon;
      imagen1$$.src =
        pokemon.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_shiny;
    }
  }
};

const iniciarCombate = () => {
  const poke1 = COMBATE.pokemon1.height * COMBATE.pokemon1.weight;
  const poke2 = COMBATE.pokemon2.height * COMBATE.pokemon2.weight;

  const imagenGanador$$ = document.querySelector(".imagenGanador");

  imagenGanador$$.src =
    "https://media.tenor.com/fysPvalDmXcAAAAC/ataque-pokemon-batalla-pokemon.gif";

  setTimeout(() => {
    if (poke1 > poke2) {
      imagenGanador$$.src =
        COMBATE.pokemon1.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_shiny;
    } else if (poke2 > poke1) {
      imagenGanador$$.src =
        COMBATE.pokemon2.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_shiny;
    } else {
      imagenGanador$$.src =
        "http://media.tenor.com/images/7018ada754a6fda31cd1fc61f59b8c2e/tenor.gif";
    }
    setTimeout(() => {
      COMBATE = {
        pokemon1: null,
        pokemon2: null,
        ganador: null,
      };
      crearTerrenoDeJuego();
      filtrarPorTipo("todos")
    }, 5000);
  }, 10000);
};
