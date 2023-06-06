//? numeros -> O -> EL CERO SIEMPRE SERÁ INTERPRETADO COMO UN VALOR FALSE 
//* EL RESTO DE NÚMEROS QUE NO SEAN 0 SERÁN VALORES TRUE

//* true
let numero = 9;

//* false
let numero2 = 0;

//* true
let numero3 = -9;

if (numero2) {
    console.log("esto cuela es un valor truesie");
} else {
    console.log("esto NO cuela es un valor falsie");
}


console.log();
//? string -> cuando lo comprobamos en una condición mirará si el string tiene longitud -> 0 o >0 - si me devuelve mayor de 0 entonces es un número truesie y si es 0 la longitud el cero es false y por lo tanto no pasará la condición

let string = "pepito"; //! 6 -> true
let stringVacio = ""; //! 0 -> false

if (stringVacio) {
    console.log("esto cuela es un valor truesie");
} else {
    console.log("esto NO cuela es un valor falsie");
}

let hola; //! UNDEFINED

if (hola) {
    console.log("hola");
} else {
    console.log("adios");
}