import { createContext, useReducer } from "react"
import { INITIAL_STATE, reducer } from "../reducer/reducer";

export const myContext = createContext();

const ContextProvider = ({ children }) => {

  // sacamos del reducer el state y el dispatch: 
  //! el state es un objeto con las propiedades que tengamos desde un inicio (INITIAL_STATE);
  //! el dispatch es una FUNCION que recibirá como parámetro una action dispatch({});
  // cuando el dispatch se ejecuta este pasará por el reducer.

  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { characters, loading, pagina } = state;

  return (
    <myContext.Provider value={{characters, loading, pagina, dispatch}}>
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider