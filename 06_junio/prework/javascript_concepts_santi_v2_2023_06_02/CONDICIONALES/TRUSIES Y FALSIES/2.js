let nombre = ""; //! string -> "" '' `` -> cadena de texto
let numero = 0; //! number -> numero
let gafas = false; //! boolean -> true // false

//* TRUESIES Y FALSIES -> cuando metemos una variable en una condición esta variable, según su valor, la podríamos convertir en algo booleano, en 1 y 0 o en false y true.

//! va a ser mi variable interpretada por mi if y si no pongo nada más, sólo la variable tendré que coger su valor y saber si es true o false.

if (!gafas) {
    console.log("esto es false");
}

//! numeros que en una condición son interpretados como true: numeros > 0 && numeros < 0
//! el único número que el if interpreta como false es 0
if (numero) {
    console.log(numero);
    console.log("mi número es true");
}

//! los string son true cuando tienen longitud mayor que 0 y son false cuando su longitud es 0
if (nombre) {
    console.log(nombre);
    console.log("mi palabra es true");
}