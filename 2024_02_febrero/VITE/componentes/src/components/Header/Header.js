import { navLinks } from "../../utils/navLinks";
import { Link } from "../Link/Link";
import "./Header.css";

export const Header = () => {
  const header = document.querySelector("#header");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (const link of navLinks) {
    Link(ul, link);
  }

  nav.append(ul);
  header.append(nav);
};
