function sayHello() {
	console.log("Hola");
}

const list = [];
const objeto = {};

function sayHelloWithName(name) {
	console.log("Hola " + name);
}

const sayHelloWithNameArrow = (name) => {
	console.log("Hola " + name);
};

const sayBye = (name) => {
	console.log("Bye " + name);
};

//Permite hacer sintaxis corta con un solo argumento
const greeting = (name) => console.log(name);
//Tienen el retorno implicito sin llaves
const sum = (numA, numB) => numA + numB;

const dosMasTres = sum(2, 3);
console.log(dosMasTres);

//Podeis escribir NORMAL
const resta = (numA, numB) => {
	const total = numA - numB;
	return total;
};
