export const GUESS_COUNTRY_INITIAL_STATE = {
  randomFlags: [],
  countrySelected: null,
  levels: 1,
  points: 0,
  countries: [],
  countryDetail: null
};

export const guessCountryReducer = (state, action) => {
  switch (action.type) {
    case "SUM_POINT":
      return { ...state, points: state.points + 1 };
    case "NEXT_LEVEL":
      return { ...state, levels: state.levels + 1 };
    case "SET_RANDOM_FLAGS":
      return { ...state, randomFlags: [...action.payload] };
    case "SET_COUNTRIES":
      return { ...state, countries: [...action.payload] };
    case "SELECT_COUNTRY": 
        return { ...state, countrySelected: {...action.payload} }
    case "GET_COUNTRY": 
        return { ...state, countryDetail: {...action.payload} }
    default:
      return state;
  }
};