import { links } from "../../utils/data/links";
import { Link } from "../Link/Link";
import "./Navbar.css";

export const Navbar = (header) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (const link of links) {
    const li = document.createElement("li");
    
    Link(li, link);

    ul.append(li);
  }

  nav.append(ul);
  header.append(nav);
};
