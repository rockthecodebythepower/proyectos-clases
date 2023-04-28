import { initFooter } from "./components/Footer/Footer";
import { initHeader } from "./components/Header/Header";
import { initMain } from "./components/Main/Main";
import "./style.css"

export const APP$$ = document.querySelector("#app");

const init = () => {
  initHeader();
  initMain();
  initFooter();
}

init();