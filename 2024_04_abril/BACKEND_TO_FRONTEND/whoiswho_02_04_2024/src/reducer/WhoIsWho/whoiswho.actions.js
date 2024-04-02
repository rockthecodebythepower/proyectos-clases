// la lógica utilizable (funciones)

import { characters } from "../../utils/characters";

export const addGuessCharacter = (dispatch, characters) => {
    
    const posicionAleatoria = Math.floor(Math.random() * characters.length);

    const characterRandom = characters[posicionAleatoria];

    dispatch({ type: "ADD_GUESS_CHARACTER", payload: characterRandom })
}

export const selectCharacter = (dispatch, name, state) => {

    const personajeSeleccionado = characters.find((character) => character.nombre === name);

  dispatch({
    type: "SELECT_CHARACTER",
    payload: personajeSeleccionado,
  });

  comprobarVictoria(dispatch, personajeSeleccionado, state.characterToGuess);
};

export const matar = (dispatch, name, state) => {

    const charactersCopy = [...state.characters];

    const index = charactersCopy.findIndex((character) => character.nombre === name);

    charactersCopy[index].vivo = false;

  dispatch({
    type: "MATAR",
    payload: charactersCopy,
  });
};

export const comprobarVictoria = (dispatch, personajeSeleccionado, guessPersonaje) => {
    console.log(personajeSeleccionado);
    console.log(guessPersonaje);
    if (personajeSeleccionado.nombre === guessPersonaje.nombre) {
        dispatch({ type: "VICTORIA" });
    } else {
        dispatch({ type: "DERROTA"});
    }
}

export const reinciar = (dispatch) => {
    dispatch({ type: "REINICIAR" })
}