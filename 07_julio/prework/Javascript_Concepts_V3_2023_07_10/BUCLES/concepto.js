//* el concepto de un bucle en programación es escribir ciertas líneas de código dentro de una sentencia que las repetirá las veces que queramos

/* mejor definición */
//* los bucles son una forma que tiene la programación de darle vueltas al mismo contenido hasta que nosotros le pongamos un límite.

//? el mejor bucle, más completo, más maleable, el primero.
//! FOR

for (let i = 0; i < 5; i++) {
  // este bucle se ejecuta 5 veces

  for (let x = 4; x < 10; x = x + 2) {
    // 3

    for (let y = 400; y > 90; y = y - 100) {
      // 4
      console.log("Cuantas veces salgo?"); //? 60
    }
  }
}

/* quiero un programa que me muestre todos los números pares del 0 al 153 */
//! necesito una resolución, me da igual como o cual -> no pensamos en lo más óptimo

// bucle que da 154 vueltas, 0 - 153;
for (let i = 0; i <= 153; i++) {
  // preguntamos si mi i es par -> i = 5; i % 2; 5 % 2 ->
  if (i % 2 === 0) {
    console.log(i);
  }
}

// un poco más optimo
for (let i = 0; i < 153; i = i + 2) {
  console.log(i);
}

/* const getEvensOf = (numInit, numFinal) => {
  let numero = numInit;

  if (numero % 2 === 1) {
    // si el número es impar
    numero++;
  }

  for (let i = numero; i < numFinal; i = i + 2) {
    console.log(i);
  }
};

getEvensOf(23, 153) */