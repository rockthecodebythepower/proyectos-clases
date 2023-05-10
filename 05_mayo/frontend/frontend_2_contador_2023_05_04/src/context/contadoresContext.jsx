import { createContext, useState } from "react";

//! vamos a crear el contexto que consumiremos
export const ContadoresContext = createContext();

const ContadoresProvider = ({ children }) => {
  const [contadores, setContadores] = useState(
    JSON.parse(localStorage.getItem("contadores")) || []
  );

  return (
    <ContadoresContext.Provider value={{ contadores, setContadores }}>
      {children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresProvider;
