import { routes } from "../../routes/routes";
import { addEventsLinks, renderLinks } from "../Links/Links";
import "./Header.css";

export const renderHeader = () => {
  const app$$ = document.querySelector("#app");

  app$$.innerHTML = `

    <header>
        <ul>
            ${renderLinks()}
        </ul>
    </header>

    `;
};

export const addEventsHeader = () => {
  for (const route of routes) {
    addEventsLinks(document.querySelector(`#${route.id}`), route.funcion);
  }
};
