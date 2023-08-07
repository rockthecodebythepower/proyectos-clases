import "./Vuelos.css";
import { Button } from "../Button/Button";
import { vuelos } from "../../data/vuelos";

export const Vuelos = () => {
  return `
        <div class="vuelos">
            <ul>
                ${vuelos.map(
                  (vuelo) =>
                    `<li>
                        <div>
                            <h4>${vuelo.title}</h4>
                            <img src="/assets/flecha.svg" alt="flecha"/>
                        </div>
                        <p>${vuelo.description}</p>
                    </li>`
                ).toString().replaceAll(",", "")}
            </ul>
            ${Button("high", "Explore Now")}
        </div>
    `;
};