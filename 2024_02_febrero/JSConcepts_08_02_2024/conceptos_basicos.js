//! palabras reservadas y cómo funciona nuestro código
//! variables

//? JAVASCRIPT es un lenguaje monohilo
// el código se ejecuta línea por línea y en cascada y no puede ejecutar dos líneas de código en el mismo momento del tiempo
// de izquierda a derecha y de arriba a abajo

//! variables
//! condicionales
//! funciones
//! bucles

/* 
    let
    const
    var
    for
    in
    of
    class
    function
    return
*/

/* 
    string - cadenas de texto 
    boolean - true o false 
    number - numeros
    null 
    undefined
    object - objetos como array
*/

/* SIMPLES - su guardado en memoria guarda directamente el valor y este accesible
    string
    number
    boolean
*/

let nombre = "Natalia";

console.log(nombre);

/* COMPLEJOS - se reserva un espacio en la memoria - 437876437082044
    array
    object
*/

let persona = {
    nombre: "Laura",
    edad: 28,
    gafas: true,
    hijos: 2,
    mascotas: [
        {
            nombre: "Paquito",
            especie: "Perro"
        },
        {
            nombre: "Juanito",
            especie: "Gato"
        }
    ]
}

// a los objetos puedo acceder con . y el nombre de la propiedad
// a los arrays puedo acceder a sus diferentes valores con las posociones [0]

console.log(persona.mascotas[0].nombre);