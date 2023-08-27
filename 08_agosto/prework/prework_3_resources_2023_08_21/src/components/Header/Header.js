import { routes } from "../../routes/routes";
import "./Header.css";

export const Header = () => {
  const header$$ = document.querySelector("header");

  for (const route of routes) {
    const enlace$$ = document.createElement("a");

    enlace$$.className = route.text === "Recursos" ? "enlace seleccionado" : "enlace";

    enlace$$.textContent = route.text;

    enlace$$.href = route.path;

    enlace$$.addEventListener("click", (e) => navegar(e, route));

    header$$.appendChild(enlace$$);
  }
};

const navegar = (e, route) => {

  //? que la página no recarge
  e.preventDefault();

  //? ejecutar la función component de la ruta en cuestión
  route.component();

  //! método para cambiar la ruta de la página sin recargar la página como tal
  history.pushState(null, null, e.target.href);
  
  quitarBordes();

  e.target.classList.add("seleccionado");

};

const quitarBordes = () => {

    const allEnlaces$$ = document.querySelectorAll(".enlace");

    for (const enlace$$ of allEnlaces$$) {
        enlace$$.className = "enlace";
    }

}