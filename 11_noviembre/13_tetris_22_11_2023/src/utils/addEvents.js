import { printTetris } from "../components/Tetris/Tetris";
import { comprobarSiPuedoMoverPiezaDerecha } from "./moverDer";
import { comprobarSiPuedoMoverPiezaIzquierda } from "./moverIzq";

export const addEvents = (arrayTetris, divTetris) => {
    document.addEventListener("keydown", (e) => {
        let puedoMovermeAIzquierda = comprobarSiPuedoMoverPiezaIzquierda(arrayTetris);
        let puedoMovermeADerecha = comprobarSiPuedoMoverPiezaDerecha(arrayTetris);
      
        if (e.key === "ArrowRight") {
          for (let i = 0; i < arrayTetris.length; i++) {
            for (let j = arrayTetris[i].length - 1; j >= 0; j--) {
              if (
                arrayTetris[i][j][0] === "J" &&
                j !== arrayTetris[i].length - 1 &&
                !arrayTetris[i][j + 1] &&
                puedoMovermeADerecha
              ) {
                // mover a la derecha
                arrayTetris[i][j + 1] = arrayTetris[i][j];
                arrayTetris[i][j] = "";
              }
            }
          }
        } else if (e.key === "ArrowLeft") {
          for (let i = 0; i < arrayTetris.length; i++) {
            for (let j = 0; j < arrayTetris[i].length; j++) {
              if (
                arrayTetris[i][j][0] === "J" &&
                j !== 0 &&
                !arrayTetris[i][j - 1] &&
                puedoMovermeAIzquierda
              ) {
                arrayTetris[i][j - 1] = arrayTetris[i][j];
                arrayTetris[i][j] = "";
              }
            }
          }
        }
        printTetris(divTetris, arrayTetris);
      });
}