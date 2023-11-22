import { addPiece, createPieza } from "./src/components/Pieza/Pieza";
import { printTetris } from "./src/components/Tetris/Tetris";
import { addEvents } from "./src/utils/addEvents";
import { comprobacion } from "./src/utils/comprobacion";
import { comprobarSiPuedoMoverPiezaAbajo } from "./src/utils/moverAbajo";
import { comprobarSiPuedoMoverPiezaDerecha } from "./src/utils/moverDer";
import { comprobarSiPuedoMoverPiezaIzquierda } from "./src/utils/moverIzq";
import { arrayPiezas } from "./src/utils/piezas";
import { preguntarSiAddNuevaPieza } from "./src/utils/puedoAddPieza";
import "./style.css";

let arrayTetris = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""], // 4
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

let piezaAleatoria = arrayPiezas[Math.floor(Math.random() * arrayPiezas.length)];

const divApp = document.querySelector("#app");

createPieza(piezaAleatoria);

const divTetris = document.createElement("div");
divTetris.className = "tetris-game";

printTetris(divTetris, arrayTetris);

addPiece(divTetris, arrayTetris, piezaAleatoria.render);

divApp.append(divTetris);

let intervalo;

comprobacion(arrayTetris, intervalo);

intervalo = setInterval(() => {
  let puedoMovermeAAbajo = comprobarSiPuedoMoverPiezaAbajo(arrayTetris);
  for (let i = arrayTetris.length - 1; i >= 0; i--) {
    for (let j = 0; j < arrayTetris[i].length; j++) {
      if (arrayTetris[i][j][0] === "J") {
        if (i + 1 < arrayTetris.length) {
          if (puedoMovermeAAbajo && !arrayTetris[i + 1][j]) {
            arrayTetris[i + 1][j] = arrayTetris[i][j];
            arrayTetris[i][j] = "";
            printTetris(divTetris, arrayTetris);
          } else {
            arrayTetris[i][j] = `P${arrayTetris[i][j].slice(1)}`;
          }
        } else {
          arrayTetris[i][j] = `P${arrayTetris[i][j].slice(1)}`;
        }
      }
    }
  }
  preguntarSiAddNuevaPieza(divTetris, arrayTetris, arrayPiezas);
  comprobacion(arrayTetris, intervalo);
}, 500);

addEvents(arrayTetris, divTetris);