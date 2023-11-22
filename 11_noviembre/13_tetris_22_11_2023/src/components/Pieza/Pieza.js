import { printTetris } from "../Tetris/Tetris";
import "./Pieza.css";

export const createPieza = (piezaAleatoria) => {
  const divApp = document.querySelector("#app");
  const divPieza = document.createElement("div");

  divPieza.className = "div-pieza";

  for (const fila of piezaAleatoria.render) {
    for (const columna of fila) {
      const divTrozo = document.createElement("div");
      if (columna) {
        divTrozo.style.background = piezaAleatoria.color;
      }
      divPieza.append(divTrozo);
    }
  }

  divApp.append(divPieza);
};

export const addPiece = (divTetris, arrayTetris, render) => {
  let columna = Math.floor(Math.random() * 7);

  for (let i = render.length - 1; i >= 0; i--) {
    /* console.log("Fila", fila); */
    for (let j = 0; j < render[i].length; j++) {
      if (render[i][j]) {
        arrayTetris[i][columna + j] = `J${render[i][j]}`;
      }
    }
    setTimeout(() => {
      printTetris(divTetris, arrayTetris);
    }, 500);
  }
};
