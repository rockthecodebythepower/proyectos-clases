import { characters, charactersCopy } from "../../utils/characters";

// el objeto de estados:
export const INITIAL_STATE = {
  characterToGuess: null,
  characterSelected: null,
  characters: [...characters],
  victory: "UNKNOWN",
};

// la función reductora -> el tratado de mis estados
export const whoiswhoReducer = (state, action) => {
  /*  const action = { type: "SELECT_CHARACTER", contenido: "Juan" } */

  switch (action.type) {
    case "SELECT_CHARACTER":
      return { ...state, characterSelected: action.payload };
    case "MATAR":
      return { ...state, characters: [...action.payload] };
    case "ADD_GUESS_CHARACTER":
      return { ...state, characterToGuess: { ...action.payload } };
    case "VICTORIA":
      return { ...state, victory: "VICTORIA" };
    case "DERROTA":
      return { ...state, victory: "DERROTA" };
    case "REINICIAR":
      return {
        ...state,
        characterToGuess: null,
        characterSelected: null,
        characters: [
          {
            nombre: "María",
            imagen: "/assets/Maria.jpeg",
            colorDePelo: "castaño",
            sexo: "mujer",
            gafas: true,
            complementoEnLaCabeza: "diadema",
            pelo: "largo",
            belloFacial: false,
            longitudDelPelo: "largo",
            vivo: true,
            tez: "clara",
          },
          {
            nombre: "Juan",
            imagen: "/assets/Juan.jpeg",
            colorDePelo: "negro",
            sexo: "hombre",
            gafas: true,
            complementoEnLaCabeza: "gorra",
            pelo: "corto",
            belloFacial: true,
            longitudDelPelo: "corto",
            tez: "clara",
            vivo: true,
          },
          {
            nombre: "Sofía",
            imagen: "/assets/Sofia.jpeg",
            colorDePelo: "rubio",
            sexo: "mujer",
            gafas: false,
            complementoEnLaCabeza: "sombrero",
            pelo: "medio",
            belloFacial: false,
            longitudDelPelo: "medio",
            tez: "pálida",
            vivo: true,
          },
        ],
        victory: "UNKNOWN",
      };
    default:
      return { ...state };
  }
};
