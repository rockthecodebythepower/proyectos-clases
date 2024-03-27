import { navLinks } from "../../data/navLinks";
import "./Header.css";

export const Header = () => {
    const header = document.querySelector("header");

    for (const navLink of navLinks) {
        const button = document.createElement("button");

        button.textContent = navLink.text;

        button.addEventListener("click", navLink.funcion);

        header.append(button);
    }
}