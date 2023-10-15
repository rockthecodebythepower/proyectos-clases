import { useState, createContext } from "react";

export const themeContext = createContext("dark");

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark');  

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider