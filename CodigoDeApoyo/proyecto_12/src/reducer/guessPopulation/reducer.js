export const GUESS_POPULATION_INITIAL_STATE = {
  levels: 1,
  points: 0,
  countries: [],
  populationSelected: 0,
  country: null,
};

export const guessPopulationReducer = (state, action) => {
  switch (action.type) {
    case "SUM_POINT":
      return { ...state, points: state.points + 1 };
    case "NEXT_LEVEL":
      return { ...state, levels: state.levels + 1 };
    case "SET_COUNTRIES":
      return { ...state, countries: [...action.payload] };
    case "SET_COUNTRY":
      return { ...state, country: { ...action.payload } };
    default:
      return state;
  }
};
