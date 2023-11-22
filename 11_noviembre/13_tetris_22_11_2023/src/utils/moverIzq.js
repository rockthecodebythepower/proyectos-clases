export const comprobarSiPuedoMoverPiezaIzquierda = (arrayTetris) => {
    let retorno = true;
  
    for (let i = 0; i < arrayTetris.length; i++) {
      for (let j = arrayTetris[i].length - 1; j >= 0; j--) {
        if (arrayTetris[i][j][0] === "J") {
          if (
            (arrayTetris[i][j - 1] && arrayTetris[i][j - 1][0] !== "J") ||
            j === 0
          ) {
            // si se cumple esta condición es que NO me puedo mover
            retorno = false;
          }
        }
      }
    }
    return retorno;
  };