import { guardados } from "../../data/guardados";
import { productos } from "../../data/products";
import { printProducts } from "../Products/Products";
import "./Header.css"

export const Header = () => {

    /* seleccionamos el div app donde meteremos el header */
    const app$$ = document.querySelector("#app");

    /* creamos la etiqueta header */
    const header$$ = document.createElement("header");

    header$$.innerHTML = `
        <img src="/assets/chollometro.webp" alt="logo chollometro" id="logo"/>
        <p style="color: white; cursor: pointer" id="guardados">ver guardados</p>
        <input id="buscador" placeholder="Buscar..."/>
    `

    /* meter el header dentro del div app */
    app$$.appendChild(header$$);

    const p$$ = document.querySelector("#guardados");
    const logo$$ = document.querySelector("#logo");


    logo$$.addEventListener("click", () => printProducts(productos))
    p$$.addEventListener("click", () => printProducts(guardados))

}