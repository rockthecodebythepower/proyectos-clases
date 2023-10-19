let numero1 = 23;
let numero2 = -122;
let numero3 = 23.83;

//! *
//! /
//! +
//! -
//! %
//! **

console.log(4 % 2); // 0

/* Math */

//* Math.abs devuelve el valor absoluto del número que le mandes
console.log(Math.abs(numero2));

//* trunca el número que le pases  3.9 -> 3   3.3 -> 3
console.log(Math.floor(numero3));

//* max -> devuelve el valor máximo de una serie de valores
console.log(Math.max(4, 1, 234, 34, 123, 234, 34, 43)); // 234

//* min -> devuelve el valor mínimo de una serie de valores
console.log(Math.min(4, 1, 234, 34, 123, 234, 34, 43)); // 1

//* pow -> potencia
console.log(Math.pow(2, 4));

//! MEGA ÚTIL
//* random -> devuelve un número aleatorio entre 0 y 1
console.log(Math.floor(Math.random() * 10));

//* método útil .toFixed(2); pasa a string el número y lo recorta en decimales los que sean
console.log((Math.random() * 10).toFixed(4));