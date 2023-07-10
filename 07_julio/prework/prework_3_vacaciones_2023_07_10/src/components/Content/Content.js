import { renderHome } from "../Home/Home";
import "./Content.css";

export const renderContent = () => {

  const app$$ = document.querySelector("#app");

  app$$.innerHTML += `<main></main>`;

  renderHome();

};