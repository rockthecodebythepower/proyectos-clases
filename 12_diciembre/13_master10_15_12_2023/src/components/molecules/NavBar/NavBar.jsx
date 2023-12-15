import "./NavBar.css";
import { navLinks } from "../../../utils/data/navLinks/navLinks";
import NavBarLink from "../NavBarLink/NavBarLink";

const NavBar = () => {
  return (
    <nav>
      <ul className="links-wrp">
        {navLinks.map((link) => {
          return (
            <NavBarLink  key={link.name} link={link}/>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;