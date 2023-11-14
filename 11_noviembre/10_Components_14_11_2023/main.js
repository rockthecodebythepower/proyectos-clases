//! la base de los componentes es la reutilización
//! un componente no es más que una función
//! le llamamos componente porque será una función que además manipulará el DOM

import { Button } from "./src/components/Button/Button";
import { Card } from "./src/components/Card/Card";
import { cardsArray } from "./src/data/cardsInfo";

import "./style.css";

const divApp = document.querySelector("#app");

divApp.innerHTML = `
    <h1>Este es mi primer h1</h1>
    ${Button({ importance: "tertiary", suma: 4 + 5 })}
    ${Button({ texto: "Login", size: "l", suma: 2 + 5 })}
    ${Button({ texto: "Register", size: "s", suma: 1 + 5 })}
    ${Button({ texto: "Lo que sea", importance: "secondary", suma: 0 + 5 })}
`;

for (const elementCard of cardsArray) {
    Card(divApp, elementCard.url, elementCard.titulo, elementCard.texto);
}