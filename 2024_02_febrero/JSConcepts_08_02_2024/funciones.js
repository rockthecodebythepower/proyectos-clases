// quiero que un fragmento de código pueda reutilizarlo.

// imaginémonos que estamos trabajando para una empresa que necesita tratar los DNI de sus clientes - para el desarrollo de esa funcionalidad necesitamos en su momento 200 líneas de código.

// ahora en otro lugar de mi aplicación necesito hacer lo mismo

// funciones sirven para reutilizar código -

/* function firstFunction(x, y) {
  console.log(x + y - x - y * x / y);
}
 */
/* firstFunction(2, 5);
firstFunction(7, 8);
firstFunction(34, 10); */

/* console.log(2 + 5 - 2 - 5 * 2 / 5); */ // 3
/* console.log(7 + 8 - 7 - 8 * 7 / 8); */ // 1

function firstFunction(x, y) {
  return x + y;
};

let suma = firstFunction(2, 5);
console.log(suma);