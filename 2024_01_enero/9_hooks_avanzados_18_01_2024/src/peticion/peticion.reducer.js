export const INITIAL_STATE = {
  page: 1,
  characters: [],
  loading: false,
};

export const peticionReducer = (state, action) => {
  /* if (action.type === "LOADING") {
    return { ...state, loading: true }
  } else if (action.type === "SUM_PAGE") {
    return { ...state, page: state.page + 1 };
  } */

  switch (action.type) {
    case "SUM_PAGE":
      return { ...state, page: state.page + 1 };
    case "SUBSTRACT_PAGE":
      return { ...state, page: state.page - 1 };
    case "LOADING":
      return { ...state, loading: true };
    case "GET_CHARACTERS":
      return { ...state, loading: false, characters: [...action.payload] };
    default:
      break;
  }
};
