export const comprobarSiPuedoMoverPiezaAbajo = (arrayTetris) => {
    let retorno = true;
  
    for (let i = arrayTetris.length - 1; i >= 0; i--) {
      for (let j = 0; j < arrayTetris[i].length; j++) {
        if (arrayTetris[i][j][0] === "J") {
          if (i + 1 < arrayTetris.length) {
            if (
              (arrayTetris[i + 1][j] && arrayTetris[i + 1][j][0] !== "J")
            ) {
              // si se cumple esta condición es que NO me puedo mover
              retorno = false;
            }
          } else {
            retorno = false
          }
        }
      }
    }
    return retorno;
  };