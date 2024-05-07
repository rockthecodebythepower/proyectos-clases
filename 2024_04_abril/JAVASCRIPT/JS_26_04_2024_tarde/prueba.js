// simples - string, numeros y booleanos - se guardan como los vemos;
// complejos - objetos y "arrays";

/* let a = 6;
let c = a;

c = 9;

console.log(a); */

let a = ["paquito", "menganito"];
let b = ["paquito", "menganito"];

console.log(a === b);

b.pop(); // elimina el último elemento del array

console.log(b);
console.log(a);
