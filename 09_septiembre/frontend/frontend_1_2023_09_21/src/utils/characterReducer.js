export const INITIAL_STATE = {
  characters: [],
  page: 1,
  limit: 0,
};

export const characterReducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...state, characters: action.payload };
    case "SUM_PAGE":
      return { ...state, page: state.page + 1 };
    case "SUBTRACT_PAGE":
      return { ...state, page: state.page - 1 };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    default:
      return state;
  }
};