import { initPpt } from "../../pages/Ppt/Ppt";
import { initMole } from "../../pages/Guac-a-Mole/Guac-a-Mole";
import "./Header.css";

export const Header = (divApp) => {
    const header = document.createElement("header");
    const buttonPpt = document.createElement("button");
    const buttonWhack = document.createElement("button");

    buttonPpt.textContent = "Piedra Papel o Tijera";
    buttonWhack.textContent = "Guac a Mole";

    buttonPpt.addEventListener("click", initPpt);
    buttonWhack.addEventListener("click", initMole);

    header.append(buttonPpt);
    header.append(buttonWhack);
    divApp.append(header);
}