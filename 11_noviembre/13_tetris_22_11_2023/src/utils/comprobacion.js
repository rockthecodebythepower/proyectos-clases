export const comprobacion = (arrayTetris, intervalo) => {
    for (let i = 0; i < arrayTetris.length; i++) {
      let interruptor = true;
      for (const columna of arrayTetris[i]) {
        if (!columna || columna[0] === "J") {
          interruptor = false;
        }
      }
      if (interruptor) {
        for (let j = 0; j < arrayTetris[i].length; j++) {
          arrayTetris[i][j] = "";
        }
        // se ha eliminado toda la fila y ahora quiero bajar el resto del contenido
        let ultimaFila = i;
        for (let i = ultimaFila; i >= 0 ; i--) {
          for (let j = 0; j < arrayTetris[i].length; j++) {
             arrayTetris[i][j] = arrayTetris[i - 1][j];
          }
        }
      }
    }
    for (let i = 0; i < arrayTetris.length; i++) {
      for (const columna of arrayTetris[i]) {
        if (i === 4 && columna[0] === "P") {
          alert("Has perdido");
          clearInterval(intervalo);
          break;
        }
      }
    }
  }