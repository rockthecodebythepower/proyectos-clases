//Funciones
function sayHello() {
	console.log("Hola!");
}

sayHello();

//Argumentos
function sayHelloWithName(name) {
	console.log("Hola " + name);
}

sayHelloWithName("Silvia");
sayHelloWithName("Ruben");

//Varios argumentos
function calculateAge(name, bornYear, currentYear = 2023) {
	const age = currentYear - bornYear;
	console.log(name + " tiene " + age + " años.");
}

calculateAge("Antonio", 1990);
calculateAge("Rocio", 1994, 2020);

//Return
function sum(numA, numB) {
	const total = numA + numB;
	return total;
}

const cincoMasSiete = sum(5, 7);
console.log(cincoMasSiete);

const sieteMasTres = sum(7, 3);
console.log(sieteMasTres);

//

//Declaro un array vacio
const users = [];

//Esta función se encarga de retornar objetos con los dos argumentos
function generateUser(name, favFood) {
	const user = {
		name: name,
		favFood: favFood,
	};

	return user;
}

//Utilizo la función generateUser para crear usuarios objeto
const antonio = generateUser("Antonio", "Rollitos de primavera");
const rocio = generateUser("Rocio", "Puchero");
const eva = generateUser("Eva", "Croquetas");
const marianela = generateUser("Marianela", "Pasta");

function addUserToList(user) {
	users.push(user);
	console.log("¡Usuario añadido a la lista!");
}

addUserToList(antonio);
addUserToList(rocio);
addUserToList(eva);
addUserToList(marianela);

console.log(users);
