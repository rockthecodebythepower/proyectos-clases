import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header id="navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "activo" : "no_activo"}>Zona clientes</NavLink>
            </li>
            <li>
              <NavLink to="/altas" className={({isActive}) => isActive ? "activo" : "no_activo"}>Nuevos clientes</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
