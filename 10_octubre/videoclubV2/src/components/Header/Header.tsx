import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Publicar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
