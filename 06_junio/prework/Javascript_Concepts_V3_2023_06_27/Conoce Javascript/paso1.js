//? declaraciones de las variables
const nombre = "Paquito";
const edad = 34;

//* TENEMOS QUE INTENTAR SIEMPRE HACER EL MEJOR CÓDIGO POSIBLE

//! estoy seleccionando la fecha.
const fecha = new Date();

//! seleccionamos el año en el que nos encontramos
const año = fecha.getFullYear();

//* restar la edad al año
const resultado = año - edad;

//* mostrarlo por pantalla
console.log("la persona " + nombre + " nació en el año " + resultado);