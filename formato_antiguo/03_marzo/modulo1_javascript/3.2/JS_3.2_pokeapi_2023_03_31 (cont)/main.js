import { initBuscador } from "./components/Buscador/Buscador";
import { initHome } from "./components/Home/Home";
import "./style.css"

export const myApp$$ = document.querySelector("#app");

const initApplication = () => {

  initHome();
  initBuscador();

}

initApplication();