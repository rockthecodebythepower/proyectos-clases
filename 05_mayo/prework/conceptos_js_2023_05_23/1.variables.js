//let -> variable
//const -> constante

let name;
name = "Peter";

console.log(name);

//NO HACER ESTO
let cosauno = "Peter";
let numero = 1;
let item2 = "Ropa";

//SI HACER ESTO
//En minusculas
//En camelCase
//Siempre tener una breve descripción de lo que es
const firstName = "Peter";
const firstname = "Peter";
const alimentos = ["Pan", "Agua", "Arroz"];

//LET
let character = "Darth Vader";
console.log(character);
character = "Luke Skywalker";
console.log(character);

//CONST
const heroe = "Spiderman";
//heroe = "Iron Man";

//LET Y CONST TIENE AMBITO DE BLOQUE

if (heroe == "Spiderman") {
	//No puedo ver que es saludo fuera de if porque tiene ambito de bloque
	const saludo = "Hola, soy Spiderman";
}
