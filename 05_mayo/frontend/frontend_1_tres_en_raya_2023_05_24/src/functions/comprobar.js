export const comprobar = (tablero) => {

    let ganador = "";

  if (
    (tablero[0][0] === "X" && tablero[0][1] === "X" && tablero[0][2] === "X") ||
    (tablero[0][0] === "X" && tablero[1][0] === "X" && tablero[2][0] === "X") ||
    (tablero[0][0] === "X" && tablero[1][1] === "X" && tablero[2][2] === "X") ||
    (tablero[0][1] === "X" && tablero[1][1] === "X" && tablero[2][1] === "X") ||
    (tablero[0][2] === "X" && tablero[1][1] === "X" && tablero[2][0] === "X") ||
    (tablero[2][2] === "X" && tablero[2][1] === "X" && tablero[2][0] === "X") ||
    (tablero[0][2] === "X" && tablero[1][2] === "X" && tablero[2][2] === "X") ||
    (tablero[1][0] === "X" && tablero[1][1] === "X" && tablero[1][2] === "X")
  ) {
    ganador = "X";
  } else if (
    (tablero[0][0] === "O" && tablero[0][1] === "O" && tablero[0][2] === "O") ||
    (tablero[0][0] === "O" && tablero[1][0] === "O" && tablero[2][0] === "O") ||
    (tablero[0][0] === "O" && tablero[1][1] === "O" && tablero[2][2] === "O") ||
    (tablero[0][1] === "O" && tablero[1][1] === "O" && tablero[2][1] === "O") ||
    (tablero[0][2] === "O" && tablero[1][1] === "O" && tablero[2][0] === "O") ||
    (tablero[2][2] === "O" && tablero[2][1] === "O" && tablero[2][0] === "O") ||
    (tablero[0][2] === "O" && tablero[1][2] === "O" && tablero[2][2] === "O") ||
    (tablero[1][0] === "O" && tablero[1][1] === "O" && tablero[1][2] === "O")
  ) {
    ganador = "O"
  }

  let completo = 0;

  if (!ganador) {
    for (const fila of tablero) {
        if (!fila.some((columna) => columna === "")) {
            completo++;
        }
    }
  }

  if (completo === 3) {
    ganador = "Empate";
  }

    return ganador;
};
