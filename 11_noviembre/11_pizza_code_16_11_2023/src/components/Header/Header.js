import { arrayEnlaces } from "../../data/enlaces";
import "./Header.css";

export const Header = () => {
    const headerHTML = document.createElement("header");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    logo.src = "/assets/logoPizzaCode.png";
    
    for (const enlace of arrayEnlaces) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.href = enlace.url;
        a.textContent = enlace.texto;

        a.addEventListener("click", enlace.page);

        li.appendChild(a);
        ul.appendChild(li);
    }

    headerHTML.appendChild(logo);
    headerHTML.appendChild(nav);
    nav.appendChild(ul);
    document.body.appendChild(headerHTML);
}