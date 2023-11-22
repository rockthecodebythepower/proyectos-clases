import { addPiece } from "../components/Pieza/Pieza";

export const preguntarSiAddNuevaPieza = (
  divTetris,
  arrayTetris,
  arrayPiezas
) => {
  let noHayJ = true;
  for (const fila of arrayTetris) {
    for (const columna of fila) {
      if (columna[0] === "J") {
        noHayJ = false;
      }
    }
  }
  if (noHayJ) {
    addPiece(
      divTetris,
      arrayTetris,
      arrayPiezas[Math.floor(Math.random() * arrayPiezas.length)].render
    );
  }
};
