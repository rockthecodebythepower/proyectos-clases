import { addEnlaces } from "../Enlaces/Enlaces";
import "./Header.css";

export const initHeader = () => {
  const header$$ = document.querySelector("#header");

  header$$.innerHTML = `
            <nav>
                <ul id="lista-enlaces"></ul>
            </nav>
    `;

  addEnlaces(document.querySelector("#lista-enlaces"), [
    "Construcciones",
    "Cajas",
  ]);
};
