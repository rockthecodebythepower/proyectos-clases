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

function sayYourName(name = "Alberto") {
	console.log(name);
}

sayYourName();
sayYourName("Antonio");

function resta(numA = 6, numB = 3) {
	console.log(numA - numB);
}

resta();
resta(2);
resta(2, 1);

function aprobar(action = true) {
	if (action) {
		console.log("Aprobado!");
	} else {
		console.log("Rechazado!");
	}
}

aprobar();
aprobar(false);

function lanzarCohete(combustible = 100, destination = "Earth") {
	if (combustible > 90) {
		console.log("Viajas al planeta: " + destination);
	} else {
		console.log("El cohete no puede despegar");
	}
}

lanzarCohete(91);

//Return

function sumWithReturn(numA, numB) {
	const total = numA + numB;
	return total;
}

const tresMasDos = sumWithReturn(3, 2);
console.log(tresMasDos);

function createAddamsFamilyMember(name) {
	const addamsName = name + " Addams";
	return addamsName;
}

const miercoles = createAddamsFamilyMember("Miercoles");
console.log(miercoles);
const fetido = createAddamsFamilyMember("Fetido");
console.log(fetido);
const cosa = createAddamsFamilyMember("Cosa");
console.log(cosa);

//No tiene por que retornar algo
const family = [];

function addFamilyMember(member) {
	family.push(member);
}

addFamilyMember(miercoles);
addFamilyMember(fetido);
addFamilyMember(cosa);

console.log(family);
