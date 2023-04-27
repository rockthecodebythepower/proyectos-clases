import "./Header.css"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
