import { PROYECTS } from "../Main/Main";
import "./Proyects.css";

export const initProyects = (proyectos) => {

    const main$$ = document.querySelector("main");

    main$$.innerHTML = "";

    const proyects$$ = document.createElement("div");

    proyects$$.className = "proyects";

    for (const proyect of proyectos) {
        
        proyects$$.innerHTML += `
            <div class="proyect-detail">
                <h3>${proyect.name}</h3>
                <div>
                    <img src="${proyect.imagen}"/>
                </div>
            </div>
        `

    }

    main$$.appendChild(proyects$$);

    añadirEventos();

}

const añadirEventos = () => {

    const buscador$$ = document.querySelector(".buscador");

    buscador$$.addEventListener("input", filtrarEstrellas)

}

const filtrarEstrellas = (e) => {

    const proyectsFiltered = PROYECTS.filter((proyect) => proyect.estrellas === parseInt(e.target.value));

    console.log(proyectsFiltered);

    if (e.target.value === "") {
        initProyects(PROYECTS)
    } else {
        initProyects(proyectsFiltered)
    }

}