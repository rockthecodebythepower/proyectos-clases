/* const frase =
  "Hoy me fui al supermercado a comprar el nuevo turrón de David Muñoz"; */

//! conocimiento base
// condicionales
// bucles
// variables

/* let contadorDeLongitud = 0;
let contadorDePalabras = 1;

for (let i = 0; i < frase.length; i++) {
  const letra = frase[i];

  if (letra === " ") {
    console.log(
      `mi palabra número ${contadorDePalabras} tiene una longitud de ${contadorDeLongitud}`
    );
    contadorDeLongitud = 0;
    contadorDePalabras++;
  } else {
    contadorDeLongitud++;
  }
} */

/* let palabra = "";

for (const caracter of frase) {
  if (caracter !== " ") {
    palabra += caracter;
  } else {
    console.log(
      `mi palabra ${palabra} tiene una longitud de ${palabra.length}`
    );
    palabra = "";
  }
} */

//! conocimiento avanzado
// métodos

/* const frase =
  "Hoy me fui al supermercado a comprar el nuevo turrón de David Muñoz";

const arrayPalabras = frase.split(" ");

for (const palabra of arrayPalabras) {
    console.log(palabra + " tiene " + palabra.length + " longitud.");
} */

const frase =
  "Hoy me fui al supermercado a comprar el nuevo turrón de David Muñoz ";

const arrayPalabras = [];

let palabra = "";

for (const caracter of frase) {
  if (caracter !== " ") {
    palabra += caracter;
  } else {
    arrayPalabras.push(palabra);
    palabra = "";
  }
}

for (const palabra of arrayPalabras) {
    console.log(palabra + " tiene " + palabra.length + " longitud.");
}