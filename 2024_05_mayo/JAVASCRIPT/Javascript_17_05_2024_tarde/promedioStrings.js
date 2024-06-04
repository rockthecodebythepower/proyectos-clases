/* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
 */

/* Dado el siguiente array, necesitamos que los números se sumen entre sí, y los string, como no los podemos sumar */

const mixedElements = [6, 1, "rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const mixedElements2 = [1, 5, 2, 7, 3, "paquito", "hola", 2];

function averageWord(arma) {
  let suma = 0;

  for (let posicion = 0; posicion < arma.length; posicion++) {
    if (typeof arma[posicion] === "string") {
      suma = suma + arma[posicion].length;
    } else {
      suma = suma + arma[posicion];
    }
  }

  console.log(suma);
}

averageWord(mixedElements);
averageWord(mixedElements2);


