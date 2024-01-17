export const INITIAL_STATE = {
  levels: 1,
  points: 0,
  countries: [],
  randomFlags: [],
  countrySelected: null,
};

export const gameReducer = (state, action) => {
  /* const action = {
        type: "lo que sea"
    } */

  switch (action.type) {
    case "SUMAR_PUNTUACION":
      return { ...state, points: state.points + 1 };
    case "RESTAR_PUNTUACION":
      return { ...state, points: state.points - 1 };
    case "SIGUIENTE_NIVEL": 
        return { ...state, levels: state.levels + 1 };
    case "RELLENAR_COUNTRIES": 
        return { ...state, countries: ["country1", "country2"]};
    default:
      return state;
  }
};
