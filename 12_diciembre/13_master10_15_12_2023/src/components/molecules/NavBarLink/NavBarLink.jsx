import { Link } from "react-router-dom";
import "./NavBarLink.css";
import Highlighter from "../../atoms/Highlighter/Highlighter";
import Image from "../../atoms/Image/Image";

const NavBarLink = ({ link }) => {
  return (
    <li>
      <Link to={link.path}>
        <Highlighter />
        <Image src={link.icon} />
        <p>{link.name}</p>
      </Link>
    </li>
  );
};

export default NavBarLink;