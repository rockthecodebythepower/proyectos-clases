import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(
    localStorage.getItem("light") === "false" ? false : true
  );

  useEffect(() => {
    localStorage.setItem("light", light);
    console.log(light);
  }, [light]);

  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
