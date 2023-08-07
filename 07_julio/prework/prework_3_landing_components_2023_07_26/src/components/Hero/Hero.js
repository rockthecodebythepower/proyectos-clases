import "./Hero.css";
import { Presentation } from "../Presentation/Presentation";
import { Vuelos } from "../Vuelos/Vuelos";

export const Hero = () => {

    const app$$ = document.querySelector("#app");

    app$$.innerHTML += `
        <div class="hero">
            ${Presentation()}
            ${Vuelos()}
        </div>
    `

}