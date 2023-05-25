/* const listaDeElementos = [
  "sdlf",
  34,
  false,
  { nombre: "pepe", edad: 39 },
  ["lsdkf", "sdklfs"],
]; */

const frutas = ["naranja", "manzana", "pomelo", "mango", "fresa", "guayaba"];
//!                 0          1         2         3        4         5

frutas[1] = "mandarina";

console.log(frutas[1]);

let ejercicio = [
  [
    { nombre: "pepe", edad: 34 },
    { nombre: "julito", edad: 28 },
    { nombre: "jeniffer", edad: 47 },
    { nombre: "yeti", edad: 12 },
  ],
  [
    { nombre: "lucia", edad: 17 },
    { nombre: "brisna", edad: 90 },
  ],
];


//! calcular el promedio de edades de las personas que están dentro del array que está dentro del array de ejercicio.

let suma = 0;
let elementos = 0;

for (const array of ejercicio) {
    for (const objeto of array) {
        suma += objeto.edad;
        elementos++;
    }
}

console.log(suma / elementos);