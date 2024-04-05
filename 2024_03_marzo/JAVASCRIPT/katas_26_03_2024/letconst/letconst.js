//! let te permite REASIGNAR el valor de una variable

//! const NO te permite REASIGNAR el valor de una variable

let numero = 0;

console.log(numero);

numero = 5; //? REASIGNAR

console.log(numero);


const array = [1, 3, 4, 5, 6, 23, 4, 5, 23];

console.log(array);

array.push("Este elemento ha sido añadido");

array.splice(0, 5);

console.log(array);