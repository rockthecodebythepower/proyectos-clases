import "./Toggle.css";

export const initToggle = (elemento$$) => {

    const img$$ = document.createElement("img");

    img$$.src = "/assets/hamburguesa.png";

    img$$.className = "menu_hamburguesa";

    img$$.addEventListener("click", () => toggle());

    elemento$$.appendChild(img$$);

}

export const toggle = () => {

    const menu$$ = document.querySelector("#menu");

    if (menu$$.className === "cerrado") {
        // aquí va lo que quiero hacer cuando he hecho click en la hamburguesa y resulta que está cerrado, lo que tendré que hacer será abrirlo, para ello, le voy a cambiar la clase de cerrado a abierto y la voy a maquetar con un ancho que me permita ver el contenido y yo interprete que está abierto.
        menu$$.className = "abierto";
    } else {
        // este código sólo se va a ejecutar si la clase del menú es abierto
        menu$$.className = "cerrado"
    }

}