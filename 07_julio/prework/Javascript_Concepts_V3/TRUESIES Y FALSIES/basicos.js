//! las condiciones en javascript son muy especiales -> puedes comprobar casi cualquier cosa.

//? los valores que no son booleanos en javascript también se pueden interpretar como valores booleanos.


/* let cadenaDeTexto = ""; //.length 0

let numero = -10;

if (cadenaDeTexto) {
    console.log("esto es true");
} else {
    console.log("esto es false");
} */


// "0" -> cadena de texto con un caracter dentro -> el caracter es un 0 pero a mi me da igual que caracter sea

// un string suelto en un if se comprueba con la longitud del mismo -> "0" -> 1 true

//* cualquier string con un caracter o más es true
//* cualquier string vacío es false
//* cualquier numero distinto de 0 es true
//* el 0 es false
//? ! es lo contrario de la expresión que tiene a la derecha
//? && la comprobación de que se cumplen tanto la condición que tiene a la derecha como la que tiene a la izquierda
//? || la comprobación de que se cumple una de las condiciones que tiene a los lados

if (!"" && 23 && ("paquito" || !0)) {
    console.log("esto es true");
} else {
    console.log("esto es false");
}