//? FUNCIONES

//! Recursividad es cuando ejecutas a la función x dentro de la función x
//! Recursividad es cuando una función se ejecuta a si misma

const array = ["naranja", "donuts", "pasta"];

let i = 0;
let encontrado = false;

const funcion = (array, palabra) => {
  if (array[i] === palabra) {
    console.log(`Hemos encontrado la palabra ${palabra} en el array`);
    encontrado = true;
  } else {
    i++;
    if (array.length >= i) {
      funcion(array, palabra);
    } else if (!encontrado) {
      console.log("no se encuentra la palabra en el array");
    }
  }
};

funcion(array, "weefasd");

const isEven = function (a) {
  //base case
  if (a === 0) return true;
  if (a === 1) return false;
  else return isEven(a - 2);
};
console.log(isEven(75));
