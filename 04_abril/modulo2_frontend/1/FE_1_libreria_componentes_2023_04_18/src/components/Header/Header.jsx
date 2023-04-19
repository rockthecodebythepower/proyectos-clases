import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" contenido="Home" className="enlace">Home</Link>
          </li>
          <li>
            <Link to="/botones" contenido="Botones" className="enlace">Botones</Link>
          </li>
          <li>
            <Link to="/alerts" contenido="Alerts" className="enlace">Alerts</Link>
          </li>
          <li>
            <Link to="/badges" contenido="Badges" className="enlace">Badges</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
