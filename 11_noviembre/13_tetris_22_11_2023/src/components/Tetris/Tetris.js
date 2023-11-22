import "./Tetris.css";

export const printTetris = (divTetris, arrayTetris) => {

  divTetris.innerHTML = "";
  for (const fila of arrayTetris) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
      if (columna[0]) {
        divCasilla.className = "pieza";
      }
      divCasilla.style.background = columna.slice(1);
      divTetris.append(divCasilla);
    }
  }

};