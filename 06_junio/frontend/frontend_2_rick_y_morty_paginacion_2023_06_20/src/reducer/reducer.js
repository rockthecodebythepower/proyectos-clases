export const INITIAL_STATE = {
    pagina: 1,
    characters: [],
    loading: false
}

export const reducer = (state, action) => {
    // compruebo si el tipo de la acción es x -> de ser hago lo que tenga que hacer cuando es x
  if (action.type === "RESTAR_PAGE") {
    return { ...state, pagina: state.pagina - 1 };
  } else if (action.type === "SUMAR_PAGE") {
    return { ...state, pagina: state.pagina + 1 };
  } else if (action.type === "LOADING") {
    return { ...state, loading: true, characters: [] }
  } else if (action.type === "CHARACTERS_OK") {
    return { ...state, loading: false, characters: [...action.contenido] }
  } else {
    return state;
  }
};