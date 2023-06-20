import { start } from "../Donuts/Donuts";
import { toggle } from "../Toggle/Toggle";
import "./Menu.css";

export const initMenu = () => {
  return `
        <aside id="menu" class="cerrado">
            <select>
                <option>Fitness</option>
                <option>Fofisano</option>
                <option>Adelgazar normal</option>
            </select>
            <button class="empezar">Empezar</button>
        </aside>
    `;
};

export const empezar = () => {
  const button$$ = document.querySelector("button.empezar");

  button$$.addEventListener("click", () => {
    toggle();
    eliminarHamburguesa();
    ponerMirilla();
    start();
  });
};

const eliminarHamburguesa = () => {
    const toggle$$ = document.querySelector("#toggle");

    toggle$$.remove();
}

const ponerMirilla = () => {

    const body$$ = document.querySelector("body");

    body$$.style.cursor = "url(/assets/mirilla.png), auto"

}