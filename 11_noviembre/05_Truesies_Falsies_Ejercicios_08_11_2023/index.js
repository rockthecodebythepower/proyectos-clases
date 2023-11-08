let cadena = " ";
let numero = 0;
let boolean = true;


// no tengo numero? === 0
/* if (!numero) {
    console.log("Ha dado false");
} */

//! los números se interpretarán como false en una condición cuando su valor sea literalmente 0, sin embargo, se interpretarán como true en caso contrario

/* console.log(cadena.length);

if (cadena) {
    console.log("La cadena es interpretada como un valor true");
} */

//! los strings se interpretarán como true cuando la longitud del string sea mayor de 0, en caso contrario serán interpretados como valores false


/* if (boolean) {
    console.log("Soy true");
} */

//! los booleans serán interpretados como true cuando su valor sea true y como false cuando su valor sea false

// 34029534953
const objeto = {};

// 39047203593
const array = [];
let array2;

if (objeto) {
    console.log("Objeto es true");
}

if (array2) {
    console.log("Array es true");
}