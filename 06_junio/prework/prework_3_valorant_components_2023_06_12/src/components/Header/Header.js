import { initAgents } from "../Agents/Agents";
import { initWeapons } from "../Weapons/Weapons";
import "./Header.css";

const enlaces = [
  { texto: "Agentes", funcion: initAgents },
  { texto: "Armas", funcion: initWeapons },
];

export const initHeader = () => {
  const header$$ = document.querySelector("header");

  for (const enlace of enlaces) {
    const enlace$$ = document.createElement("h3");

    enlace$$.textContent = enlace.texto;

    header$$.appendChild(enlace$$);

    enlace$$.addEventListener("click", enlace.funcion);
  }
};