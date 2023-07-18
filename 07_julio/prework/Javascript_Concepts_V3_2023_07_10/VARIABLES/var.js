//! esta es la manera más antigua de declarar una variable

//* TIENE UN ÁMBITO o SCOPE GLOBAL


//? ejemplo con var scope global

if (5 > 4) {
    var nombre = "Pepe"; //! se sale del if y puedo acceder a ella FUERA del if
}

console.log(nombre); //! Respuesta -> Pepe


//? ejemplo con let scope local

if (5 > 4) {
    let nombre2 = "Pepe";
}

console.log(nombre2); //! Respuesta -> ERROR nombre2 is no defined