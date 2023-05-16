//! LA PRINCIPAL RAZÓN DE SER DE LAS FUNCIONES ES LA REUTILIZACIÓN DE CÓDIGO;

//* En mi empresa me piden que haga un cálculo con el dni para conocer la letra del mismo, en este caso, para calcular la letra de un dni tengo que coger el número del dni dividirlo entre 23 y coger el resto y luego, ese resto, lo utilizamos en la tabla de letras del dni que es la siguiente:

/* const tablaDNI = {
    0: "T",
    1: "R",
    2: "W",
    3: "A",
    4: "G",
    5: "M",
    6: "Y",
    7: "F",
    8: "P",
    9: "D",
    10: "X",
    11: "B",
    12: "N",
    13: "J",
    14: "Z",
    15: "S",
    16: "Q",
    17: "V",
    18: "H",
    19: "L",
    20: "C",
    21: "K",
    22: "E"
} */

const tablaDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

//? en un punto de mi aplicación, cuando se registra mi usuario en mi base de datos mediante un formulario, necesito calcular su letra del dni para comprobar que todo está bien.

//* Un usuario me ha pasado este DNI
/* const DNI = 18321834; */

//! este operador obtiene el resto de una operación, en este caso el resto de dividir DNI entre 23
/* console.log(DNI % 23); //* me devuelve 11

console.log("Esta es la letra del DNI: " + tablaDNI[DNI % 23]); */


//! Aquí tengo que volver a sacar la letra del dni porque me han puesto el DNI de la persona a la que le tengo que enviar una carta por correo.

/* const DNI2 = 20330812; */

/* console.log(DNI2 % 23) //* me devuelve 8

console.log("Esta es la letra del DNI2: " + tablaDNI[DNI2 % 23]); */

//! HAREMOS UNA FUNCIÓN PARA QUE SIEMPRE QUE YO QUIERA CALCULAR LA LETRA DE CUALQUIER DNI FUNCIONE DE LA MISMA MANERA SIEMPRE
function calcularDNI (DNI) {
    //? function: palabra reservada para saber que esto es una declaración de una función
    //? calcularDNI: el NOMBRE de la función, se guardará en memoria con ese nombre y por lo tanto cuando la quiera ejecutar tendré que referirme a ese nombre.
    //? (DNI) -> Esto es el parámetro que recojo en esta ocasión -> en este punto, DNI es el nombre con el que se va a guardar lo que me ENVÍEN
    //! En esta función lo que varía es mi DNI
    console.log("Me envían el DNI:", DNI);

    //* El return significa que mi función DEVUELVE O RETORNA algo;
    return tablaDNI[DNI % 23];
}

console.log("pepito");

//! EJECUCIÓN O LLAMADA DE LA FUNCIÓN nombreFuncion(parámetros);
console.log(calcularDNI(98232345));
// console.log(calcularDNI(12393658));
// console.log(calcularDNI(23981921));