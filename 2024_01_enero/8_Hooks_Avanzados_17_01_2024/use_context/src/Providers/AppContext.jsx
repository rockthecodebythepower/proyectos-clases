import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  return (
    <AppContext.Provider
      value={{
        datoDeHijo5: "Este es el dato que le tiene que llegar al hijo 5",
        mode: mode,
        setMode: setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
