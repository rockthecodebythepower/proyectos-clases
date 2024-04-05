// Condicionales y bucles
let posiblesConductores = [
  {
    nombre: "Ana",
    edad: 28,
    carnet: true,
    coche: "Renault",
    combustible: true,
  }, //! 0
  {
    nombre: "Carlos",
    edad: 35,
    carnet: true,
    coche: "BMW",
    combustible: true,
  }, //! 1
  {
    nombre: "Laura",
    edad: 22,
    carnet: false,
    coche: null,
    combustible: false,
  }, //! 2
  {
    nombre: "Javier",
    edad: 40,
    carnet: true,
    coche: "Audi",
    combustible: false,
  }, //! 3
  {
    nombre: "Sara",
    edad: 29,
    carnet: true,
    coche: "Seat",
    combustible: false,
  }, //! 4
  {
    nombre: "Diego",
    edad: 31,
    carnet: true,
    coche: "Peugeot",
    combustible: true,
  }, //! 5
  {
    nombre: "Elena",
    edad: 16,
    carnet: false,
    coche: null,
    combustible: false,
  }, //! 6
  {
    nombre: "Pablo",
    edad: 16,
    carnet: true,
    coche: "Volkswagen",
    combustible: true,
  }, //! 7
  {
    nombre: "Carmen",
    edad: 27,
    carnet: true,
    coche: "Ford",
    combustible: true,
  }, //! 8
  {
    nombre: "Luis",
    edad: 10,
    carnet: false,
    coche: null,
    combustible: false,
  }, //! 9
]; //? 10


for (let numero = 0; numero < posiblesConductores.length; numero++) {

    //! let numero = 0 -> declaramos una variable numérica que vale 0
    //* numero < posiblesConductores.length -> SIEMPRE Y CUANDO mi variable número, sea menor que el valor de la sentencia posiblesConductores.length seguiré ejecutando el bucle
    //? numero++ -> numero = numero + 1 -> sumamos 1 al número al final de cada vuelta

    if (
        posiblesConductores[numero].edad >= 18 &&
        posiblesConductores[numero].carnet === true &&
        posiblesConductores[numero].coche &&
        posiblesConductores[numero].combustible
      ) {
        console.log(posiblesConductores[numero].nombre + " puede conducir");
      } else {
        console.log(posiblesConductores[numero].nombre + " NO puede conducir");
      }

}

console.log("Acabamos el bucle");

//! variables (tipos de datos) / condicionales / bucles / funciones