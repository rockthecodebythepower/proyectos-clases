import { initMain } from "../Main/Main";
import "./Enlaces.css";

export const addEnlaces = (padre$$, arrayEnlaces) => {

  for (const enlace of arrayEnlaces) {

    const enlace$$ = document.createElement("li");

    enlace$$.textContent = enlace;

    enlace$$.className = "enlace";

    enlace$$.addEventListener("click", () => initMain(enlace));

    padre$$.appendChild(enlace$$);

  }

};
