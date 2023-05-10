import { createContext, useState } from "react";

export const modeContext = createContext();

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <modeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </modeContext.Provider>
  );
};

export default ModeProvider;
