//! operadores de comparación

/* if (30 > 20) {
    console.log("es mayor");
}

if (20 < 30) {
    console.log("es menor");
}

if (30 >= 20) {
    console.log("es mayor o igual que");
}

if (20 <= 30) {
    console.log("es menor o igual que");
}

if ("20" == 20) { // == NO tiene en cuenta el tipo de dato
    console.log("es igual");
}

if ("20" === 20) { // === SI tiene en cuenta el tipo de dato
    console.log("es estrictamente igual");
} */


//! operadores lógicos - interpretan dos expresiones, una a la izquierda y otra a la derecha

//? AND -> y -> &&
//* unicamente si la expresión de la izquierda Y la de la derecha son true entonces la expresión en conjunto dara true.
console.log(true && true) //! true
console.log(true && false) //! false
console.log(false && true) //! false
console.log(false && false) //! false

console.log("------------------------");

//? OR -> o -> ||
//* si la expresión de la izquierda O la de la derecha son true entonces la expresión en conjunto dara true.
console.log(true || true) //! true
console.log(true || false) //! true
console.log(false || true) //! true
console.log(false || false) //! false

console.log("------------------------");

//? NOT -> no -> !
//* la negación o CONTRARIO DE -> va a negar lo que tenga justo a su derecha
console.log(!true);


console.log("------------------------");

// si tengo más de 100 pavos y ganas de viajar y hay vuelo para esa fecha hacia parís O londres

let dinero = 101;
let ganas = true;
let vuelo = true;
let destino = "Londres"

if (dinero > 100 && ganas === true && vuelo === true && (destino === "París" || destino === "Londres")) {
    console.log("ME VOY DE VIAJE!!!");
} else { // y si no se cumple
    console.log("no me voy de viaje :(");
}