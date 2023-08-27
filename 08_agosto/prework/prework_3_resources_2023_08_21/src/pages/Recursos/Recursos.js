import "./Recursos.css"
import { Recurso } from "../../components/Recurso/Recurso";
import { recursosArray } from "../../data/recursos";

export const Recursos = () => {
    const main$$ = document.querySelector("main");

    main$$.innerHTML = `
        <div id="recursos">
            ${recursosArray.map(recurso => Recurso(recurso)).join(",").replaceAll(",", "")}
        </div>
    `
}