import React, { useContext } from 'react'
import ChangeTheme from '../ChangeTheme/ChangeTheme'
import { themeContext } from '../../providers/Theme/Theme'

const Header = () => {

    const { theme } = useContext(themeContext);

  return (
    <header className={theme}>
        <ChangeTheme/>
    </header>
  )
}

export default Header