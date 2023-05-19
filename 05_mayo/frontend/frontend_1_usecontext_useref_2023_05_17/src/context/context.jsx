import { createContext, useState } from "react";

export const Context = createContext();

export const NumProvider = ({ children }) => {

    const [num, setNum] = useState(0);
    let info = "pepito perez galdós"

  return (
    <Context.Provider value={{num, setNum, info}}>
        {children}
    </Context.Provider>
  )
}