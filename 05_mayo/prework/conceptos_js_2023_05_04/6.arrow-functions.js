//Declarar una función
function sayHello() {
	console.log("Hola!");
}

//Ejecutar la función
sayHello();

//Puede recibir argumentos
function sayHelloWithName(name) {
	console.log("Hello " + name);
}

//Ejecuto la función con argumentos
sayHelloWithName("Peter");

//ARROW FUNCTIONS

//Función tradicional
/* function sayGoodMorning() {
	console.log("Good Morning!");
} */
let name = "Peter";
//Arrow function
const sayGoodMorning = () => {
	console.log("Good Morning!");
};

sayGoodMorning();

//

const sayGoodMorningWithName = (name) => {
	console.log("Good morning " + name);
};

sayGoodMorningWithName("Peter");

//Con retorno
const sum = (numA, numB) => {
	const total = numA + numB;
	return total;
};

const dosMasCinco = sum(2, 5);
console.log(dosMasCinco);
//console.log(sum(10, 5));

//EJEMPLO SIMPLE
const sayHey = () => {
	return "Hey";
};

const resultadoSayHey = sayHey();
console.log(resultadoSayHey);

//Simple
const sayByeWithName = (name) => "Bye " + name;

const bye = sayByeWithName("Peter");
console.log(bye);
