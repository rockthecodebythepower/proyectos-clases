export const INITIAL_STATE = {
    primary: null,
    secondary: null,
    terciary: null,
    text: null,
    stroke: null,
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_COLORS":
        return {
          ...state,
          primary: contenido.primary,
          secondary: contenido.secondary,
          terciary: contenido.terciary,
          text: contenido.text,
          stroke: contenido.stroke,
        };
      default:
        return state;
    }
  };