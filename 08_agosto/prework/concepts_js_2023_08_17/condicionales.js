// pregunto algo y si se cumple hago una cosa y si no otra

// si tienes más de 18 años o 18 años te dejamos comprar alcohol, si no, no te dejamos

let edad = 18;

/* if (edad >= 18) {
    console.log("te dejo comprar alcohol");
} else {
    console.log("no te dejo comprar alcohol");
}
 */

/* || OR -> esto o lo otro y te dejo pasar -> para pasar a la discoteca necesitas zapatos bonitos O tener mucho dinero */

/* && AND -> si esto Y lo otro te dejo pasar -> para pasar a la discoteca necesitas zapatos bonitos Y tener mucho dinero */

/* ! NOT -> si no esto -> para pasar a la discoteca necesitas no tener navaja */

/* if (edad > 18 || edad === 18) {
    console.log("te dejo comprar alcohol");
} else {
    console.log("no te dejo comprar alcohol");
} */

/* if (edad > 18) {
    console.log("te dejo comprar alcohol");
} else if (edad === 18) {
    console.log("te dejo comprar alcohol");
} else {
    console.log("no te dejo comprar alcohol");
} */

/* === > < <= >= ! || &&  */

let nombre = "";

if (nombre) { // nombre es un string -> un string como lo puedo interpretar con valores verdaderos o falsos? -> si nombre tiene texto entonces existe, tiene contenido y por lo tanto lo voy a interpretar como que se cumple la condición, en caso de estar vacío no se cumple la condición
    console.log("tengo nombre");
}

let numero = 0; // todos los números distintos de 0 son true
                //! el número 0 será false

if (numero) {
    console.log("tengo número");
}

if (nombre.length > 0) {
    console.log("el nombre existe");
} else {
    console.log("el nombre no existe");
}