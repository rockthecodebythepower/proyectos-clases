import { routes } from "../../routes/routes";
import "./Navbar.css";

const Navbar = ({ column, isOpen, setIsOpen }) => {
  return (
    <nav>
      <ul id="nav-list" style={{flexDirection: column ? "column" : "row"}}>
        {routes.map((route) => {
            return (
                <li>
                    <a href={route.link} onClick={() => isOpen && setIsOpen(!isOpen)}>{route.text}</a>
                </li>
            )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
