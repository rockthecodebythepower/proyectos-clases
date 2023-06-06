//! si tengo dinero Y me dan vacaciones en el trabajo O me echan del trabajo Y encontramos destino Y NO hace mal tiempo ENTONCES iremos de viaje

//* ejercicio de puertas lógicas

/* let dinero = false;
let vacaciones = true;
let trabajo = true;
let destino = true;
let tiempo = "buen tiempo";

if (dinero && (vacaciones || !trabajo) && destino && tiempo !== "mal tiempo") {
    console.log("ME VOY DE VACACIONES");
} else {
    console.log("NO ME VOY DE VACACIONES");
} */

//! CONDICIONALES

//? JAVASCRIPT
//* = -> asignación -> cambiar de valor una variable
//* == -> comparación no estricta -> si puede cambiar los valores de tipo de dato para comprobarlos lo hará
//* === -> comparación estricta
//* ! == -> comparación negativa -> si no...

let numero = 25;
let palabra = "25";
let digito = "";
let gafas = true;

if (numero == palabra) {
    console.log("NUMERO ES IGUAL QUE PALABRA!");
}

if (numero === palabra) {
    console.log("NUMERO ES ESTRÍCTAMENTE IGUAL QUE PALABRA!");
}

if (numero >= 18) {
    console.log("NUMERO ES MAYOR DE EDAD");
}

if (gafas === true) {
    console.log("TENGO GAFAS");
}

//! vease trusies y falsies
console.log("esto es digito: " + digito);

if (digito) {
    console.log("DIGITO ES TRUE");
}