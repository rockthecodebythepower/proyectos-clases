import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <Link id="paco" to="https://www.google.com/?hl=es" cN="paquito" laskdf="asdlkfoal">
            Google
          </Link>
          <a href="https://www.google.com/?hl=es">Google</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
