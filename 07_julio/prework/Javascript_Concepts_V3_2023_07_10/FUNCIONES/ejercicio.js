//! necesito un programa al que pasado un número me devuelva todos los número pares que hay desde ese número hasta el 1000 y en caso de que el número sea mayor de 1000 me devuelva un mensaje de error.

//? tendré que hacerlo con funciones para poder reutilizarlo en el futuro

function calculadoraPares(numero) {
  let numerosPares = [];
  /* let numerosPares = ""; */

  if (numero % 2 === 1) {
    // numero impar
    numero++;
  }

  for (let i = numero; i <= 1000; i = i + 2) {
    numerosPares.push(i);
  }

  if (numerosPares.length > 0) {

    //! una vez me hayas invocado y yo haya hecho mis cositas te DEVUELVO el resultado -> no siempre es necesario un return // sólo se puede ejecutar una vez el return por lo tanto al return le tengo que dar ya todos los números pares
    return numerosPares;

  } else {
    return "Error, me tienes que pasar un número menor de 1000"
  }
}

console.log(calculadoraPares(3478));
console.log(calculadoraPares(34));
console.log(calculadoraPares(995));