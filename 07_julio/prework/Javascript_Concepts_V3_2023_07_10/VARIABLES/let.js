//! let es una muy buena alternativa a var -> let viene en ES6 para derrocar un poco a var, puesto que una variable declarada con let también se puede reasignar PERO no tiene un scope global lo cual nos viene muy bien.

//? un único = es REASIGNACIÓN es decir, le estoy dando un nuevo valor a la variable

let numero = 5;

console.log(numero);

numero = 6;

console.log(numero);

numero = numero + 1; // 7

numero = numero * 2; // 14

numero = numero / 2; // 7

console.log(numero);

numero = numero + numero; // 14

console.log(numero);