/* ¿Qué es JavaScript? -> Javascript es un lenguaje de programación basado en Java pero que se centra en el apartado web - tipado débil o dinámico - programación funcional - programación orientada a objetos

JavaScript es un lenguaje de programación de alto nivel y dinámico

 */

let nombre = true;

nombre = 5;

nombre = "paquito";

/* ¿Qué es un comentario?

Un comentario es un bloque de código que no se ejecuta y que nos sirve a modo informativo en la fase de desarrollo

*/

/* 
¿Cuál es un nombre de variable correcto?

1product

product$1 ✅

product-1

product 1
 */


/* ¿Qué es el shadowing?

Cuando una variable con el mismo nombre se declara dentro de la función, le hace sombra [Shadowing] a la externa

*/

/* let paquito = "paquito";

if (5 > 4) {
    let paquito = "otra cosa";
    console.log(paquito);
}

console.log(paquito); */

/* ¿Qué tipos de datos hemos visto?

string, number, boolean, null, undefined y object

*/

const array = [23, 23, 32, 23];

console.log(typeof array);