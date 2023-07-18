//! tengo dos variables 
let numero1 = 56;
let numero2 = 23;

//? el objetivo que busco es intercambiar los valores de las variables, es decir que numero1 = 33; y numero2 = 56
//* puedo usar lo que quiera MENOS cambiar directamente el valor y ponerle 33 a numero1 (nosotros no sabemos que valores hay dentro de las variables);

console.log(numero1);
console.log(numero2);

/* numero1 = numero2; */

let aux = numero1; // guardar el valor de numero1 en una caja para no perderlo

numero1 = numero2;
numero2 = aux;

console.log(numero1);
console.log(numero2);

//! resolver el ejercicio sin crear variables adicionales