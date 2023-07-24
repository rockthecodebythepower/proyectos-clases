import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa"
import Navbar from "../Navbar/Navbar"
import "./Header.css"

const Header = ({ tabletOrLess }) => {

  return (
    <header>
        <img src="./assets/logo.png" alt="logo"/>
        {tabletOrLess ? <MenuHamburguesa/> : <Navbar/>}
    </header>
  )
}

export default Header