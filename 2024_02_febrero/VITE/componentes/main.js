import { Characters } from "./src/components/Characters/Characters";
import { Header } from "./src/components/Header/Header";
import "./style.css";

const divApp = document.querySelector("#app");

divApp.innerHTML = `
  <header id="header"></header>
  <main id="main"></main>
`;

Header();
Characters();