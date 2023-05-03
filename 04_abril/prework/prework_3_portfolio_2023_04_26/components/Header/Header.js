import { APP$$ } from "../../main";
import { PROYECTS, initMain } from "../Main/Main";
import { initProyects } from "../Proyects/Proyects";
import "./Header.css"

let ubicacion = "hello";

export const initHeader = () => {

    APP$$.innerHTML = ` 
        <header>
            <p>Rock{TheCode}</p>
            <nav>
                <ul>
                    <li id="hello" class="navegacion ${ubicacion === 'hello' ? 'seleccionado': ''}">_hello</li>
                    <li id="about" class="navegacion ${ubicacion === 'about' ? 'seleccionado' : ''}">_about-me</li>
                    <li id="proyects" class="navegacion ${ubicacion === 'proyects' ? 'seleccionado' : ''}">_proyects</li>
                </ul>
                <input class="buscador" placeholder="Buscar..." type="number"/>
                <p class="navegacion">_contact-me</p>
            </nav>
        </header>
        <main></main>
    `
    añadirEventos();
}

const añadirEventos = () => {

    const hello$$ = document.querySelector("#hello");
    const about$$ = document.querySelector("#about");
    const proyects$$ = document.querySelector("#proyects");

    hello$$.addEventListener("click", () => cambiarUbicacion("hello"));
    about$$.addEventListener("click", () => cambiarUbicacion("about"));
    proyects$$.addEventListener("click", () => cambiarUbicacion("proyects"));

}

const cambiarUbicacion = (newUbicacion) => {
    ubicacion = newUbicacion;
    initHeader();
    if (ubicacion === "hello") {
        initMain();
    } else if (ubicacion === "about") {
        /* initAbout(); */
    } else {
        initProyects(PROYECTS);
    }
}