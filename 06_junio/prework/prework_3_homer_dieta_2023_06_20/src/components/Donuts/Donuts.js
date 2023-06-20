import { restarPuntuacion, sumarPuntuacion } from "../Puntuacion/Puntuacion";
import "./Donuts.css";

let index = 0;
let indexEliminados = 0;

export const start = () => {

    const gameBoard$$ = document.querySelector("#gameBoard");

    setInterval(() => {
        spawnDonut(gameBoard$$);
    }, 500);

}

const spawnDonut = (elemento$$) => {

    const imgs$$ = document.querySelectorAll("img.donut");

    const img$$ = document.createElement("img");

    img$$.id = `elemento${index++}`;

    img$$.className = "donut";

    img$$.src = "/assets/donut.png";

    if (Math.floor(Math.random() * 10) === 3) {
        img$$.src = "/assets/maggie.webp";
    } else if (Math.floor(Math.random() * 10) === 4) {
        img$$.src = "/assets/lisa.png";
    } else if (Math.floor(Math.random() * 10) === 5) {
        img$$.src = "/assets/bart.webp";
    }

    let topRandom = Math.random() * window.innerHeight;
    let leftRandom = Math.random() * window.innerWidth;

    img$$.addEventListener("click", () => disparo(img$$))

    img$$.setAttribute("style", `top: ${topRandom - 70}px; left: ${leftRandom - 70}px`)

    elemento$$.appendChild(img$$);

    setTimeout(() => {
        eliminarElementos()
    }, 5000);

}

const eliminarElementos = () => {
    const eliminar$$ = document.querySelector(`#elemento${indexEliminados++}`);

    if(eliminar$$.src.split("/").at(-1) === "donut.png") {
        restarPuntuacion();
    }

    eliminar$$.remove();

}

const disparo = (img$$) => {

    
    if(img$$.src.split("/").at(-1) === "donut.png") {
        sumarPuntuacion();
    } else {
        restarPuntuacion();
    }

    img$$.remove();

}