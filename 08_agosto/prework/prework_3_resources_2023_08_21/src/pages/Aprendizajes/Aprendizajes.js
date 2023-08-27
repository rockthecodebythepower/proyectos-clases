import { aprendizajesArray } from "../../data/aprendizajes";
import { Aprendizaje } from "../../components/Aprendizaje/Aprendizaje";
import "./Aprendizajes.css";

export const Aprendizajes = () => {
    const main$$ = document.querySelector("main");

    main$$.innerHTML = `
        <div id="aprendizajes">
            ${aprendizajesArray.map(aprendizaje => Aprendizaje(aprendizaje)).join(",").replaceAll(",", "")}
        </div>
    `
}