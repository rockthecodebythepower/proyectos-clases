// variables

//! tenemos dos variables 
let a = 23423;
let b = 20234;

//! NECESITAMOS intercambiar sus valores
// let a = 10;
// let b = 5;

let c = a; // guardando el valor de a en otra variable -> c = 5;
// c = a(5)

a = b; // a = b(10);

b = c; // b = c(5);

console.log(a);
console.log(b);


//! SIN UTILIZAR UNA VARIABLE TEMPORAL
a = a + b; // a = 5 + 10 = 15
b = a - b; // b = 15 - 10 = 5
a = a - b; // a = 15 - 5 = 10


console.log(a);
console.log(b);