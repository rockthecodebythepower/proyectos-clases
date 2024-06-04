import { app } from "../../utils/variables";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const menu = document.createElement("img");
    
    menu.classList.add("menu");
    menu.src = "/assets/menu.png";

    menu.addEventListener("click", () => {
        const nav = document.querySelector("header > nav");

        if (nav.offsetHeight > 0) {
            nav.style.height = "0px";
        } else {
            nav.style.height = "80svh";
        }
    })

    header.append(menu)
    app.append(header);

    Navbar(header);
}