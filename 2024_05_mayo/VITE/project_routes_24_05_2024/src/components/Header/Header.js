import { navLinks } from "../../utils/data/navlinks";
import { NavLink } from "../NavLink/NavLink";
import "./Header.css";

export const Header = () => {
    const app = document.querySelector("#app");

    const header = document.createElement("header");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    logo.src = "/assets/logo.png";
    logo.alt = "logo de la empresa";

    for (const link of navLinks) {
        NavLink({ parentNode: ul, link });
    }

    app.append(header);
    header.append(logo, nav);
    nav.append(ul);
}