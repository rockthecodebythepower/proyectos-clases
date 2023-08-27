import { createContext, useState } from "react"

export const themeContext = createContext();

const Theme = ({ children }) => {

    const [theme, setTheme] = useState("light")

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default Theme