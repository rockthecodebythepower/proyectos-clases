// normalmente utilizamos un bucle para recorrer un array o un string

// Arrays y String - tipos de datos iterables

// iterables: cada elemento que los conforma está clasificado por un número (posición)

let nombre = "Hola Francisco";
//            0123456789

let palabras = ["Hola", "Francisco", "Que", "Tal"]; // 4
//                0          1        2      3

//! for (valorInicial; condición; iteración) {
//! }

for (let i = 0; i < palabras.length; i++) {
  const palabra = palabras[i];
  /* console.log(palabra); */
}

for (const palabra of palabras) {
  // sólo sirve para recorrer iterables de la manera cotidiana
  /* console.log(palabra); */
}

palabras.forEach((palabra) => {
  // sólo sirve para recorrer iterables de la manera cotidiana
  /* console.log(palabra); */
});

// for
// forof
// foreach
// while
// do while

let date = new Date();

console.log(date.getMinutes());

while (date.getSeconds() <= 56) {
  date = new Date();
  console.log("Estamos en este segundo: " + date.getSeconds());
}
