import "./Header.css";
import { navLinks } from "../../utils/data/navLinks";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <NavLink key={link.path} path={link.path} text={link.text} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
