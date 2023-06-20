//Declarar una variable
var firstName;
//Asignar un valor -> =
firstName = "Antonio";
//Declarar y asignar
var firstName = "Paco";
console.log(firstName);

//let y const

let x = 10;
//Con let podemos reasignar el valor a una variable
x = 15;

const y = 20;
//A const no podemos reasignarle el valor

//Tanto let como const tienen ambito de bloque

if (true) {
  const block = "Soy una constante dentro de un if";
}

console.log(block);
