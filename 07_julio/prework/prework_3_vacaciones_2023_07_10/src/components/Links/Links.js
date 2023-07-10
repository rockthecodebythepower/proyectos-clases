import { routes } from "../../routes/routes";
import "./Links.css";

export const renderLinks = () => {

    let links = ``;

    for (const route of routes) {
        
        links += `<li id="${route.id}" class="header_link">${route.text}</li>`;

    }

    return links;

}

export const addEventsLinks = (elemento, funcion) => {

    elemento.addEventListener("click", funcion);

}