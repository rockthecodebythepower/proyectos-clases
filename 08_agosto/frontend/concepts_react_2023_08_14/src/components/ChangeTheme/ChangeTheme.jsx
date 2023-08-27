import React, { useContext } from 'react'
import { themeContext } from '../../providers/Theme/Theme'

const ChangeTheme = () => {

    const {setTheme, theme} = useContext(themeContext);

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>ChangeTheme</div>
  )
}

export default ChangeTheme