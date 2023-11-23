import { Header } from './src/components/Header/Header';
import { initMole } from './src/pages/Guac-a-Mole/Guac-a-Mole';
import './style.css'

const divApp = document.querySelector("#app");

Header(divApp);

const divContent = document.createElement("div");

divContent.className = "content"

divApp.append(divContent);

initMole();