//Funciones
function sayHello() {
	console.log("Hola!");
}

sayHello();

//Con argumentos
function sayHelloWithName(name) {
	console.log("Hola " + name);
}

sayHelloWithName("Peter");
sayHelloWithName("Jose");

function sum(firstNumber, secondNumber) {
	console.log(secondNumber + firstNumber);
}

sum(2, 5);
sum(120, 267);

//Argumentos con valor por defecto

function resta(firstNumber = 3, secondNumber = 1) {
	console.log(firstNumber - secondNumber);
}

resta();
resta(5);
resta(5, 2);
