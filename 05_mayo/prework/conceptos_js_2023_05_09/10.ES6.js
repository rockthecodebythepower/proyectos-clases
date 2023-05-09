//Template string
const firstName = "Peter";
const surname = "Parker";
const age = 28;
const quote = `Mi nombre es ${firstName} ${surname}, y tengo ${age} años.`;
console.log(quote);

const template = `
<ul>
    <li>
        <p>${firstName} ${surname}</p>
    </li>
</ul>`;

//Destructuring
const movie = {
	title: "Titanic",
	year: 1997,
	director: "James Cameron",
	cast: ["Leonardo DiCaprio", "Kate Winslet"],
	genre: "Drama",
	company: "Fox",
	action: () => {
		console.log("Se hunde el barco!");
	},
};
/* const title = movie.title;
const year = movie.year;
const director = movie.director; */

//CON ES6
const {title, year, director} = movie;
console.log(title);

//Spread operator
const heroes = ["Luke", "Leia", "Han"];
const villains = ["Darth Vader", "The Emperor", "Tarkin"];

/* const characters = heroes.concat(villains);
console.log(characters); */
const characters = [...heroes, ...villains, "Chewbacca"];
console.log(characters);

//Podemos sustituir al push
let addamsFamily = [];

addamsFamily = [...addamsFamily, "Miercoles Addams"];
console.log(addamsFamily);
addamsFamily = [...addamsFamily, "Cosa Addams"];
console.log(addamsFamily);
addamsFamily = [...addamsFamily, "Fetido Addams"];
console.log(addamsFamily);

console.log([..."🧑‍💻"]);

//Map
const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

const humans = ["👨‍🦱", "👨‍🦱", "👨‍🦱", "👨‍🦱", "👨‍🦱"];
const zombies = humans.map((human, i) => "🧟" + i);
console.log(zombies);

const superheroes = [
	{
		name: "Batman",
		city: "Gotham",
		age: 60,
	},
	{
		name: "Wonderwoman",
		city: "Themiscyra",
		age: 200,
	},
	{
		name: "Superman",
		city: "Krypton",
		age: 45,
	},
];

const customSuperheroes = superheroes.map((heroe) => ({
	nombre: heroe.name,
	ciudad: heroe.city,
	superheroe: true,
}));

console.log(customSuperheroes);

//Filter
const ESDLAcharacters = [
	{
		name: "Frodo",
		species: "Hobbit",
		age: 24,
	},
	{
		name: "Legolas",
		species: "Elve",
		age: 160,
	},
	{
		name: "Sam",
		species: "Hobbit",
		age: 25,
	},
];

const hobbits = ESDLAcharacters.filter(
	(character) => character.species === "Hobbit"
);

console.log(hobbits);

const normalAge = ESDLAcharacters.filter((character) => character.age < 120);

console.log(normalAge);

//Find
const sam = ESDLAcharacters.find((character) => character.name === "Sam");
console.log(sam);

//Reduce
const charactersAges = ESDLAcharacters.reduce(
	(acumulador, character) => acumulador + character.age,
	0
);
console.log(charactersAges);

//Every
const food = ["🥝", "🥝", "🥝", "🥝", "🥝", "🍔", "🥝"];
const isVegan = food.every((item) => item === "🥝");
console.log(isVegan);

//Some
const someIsVegan = food.some((item) => item === "🥝");
console.log(someIsVegan);

const kiwiOHamburguesa = food.some((item) => item === "🥝" || item === "🍔");

console.log(kiwiOHamburguesa);

//Combo
const marvelCharacters = [
	{
		name: "Wolverine",
		type: "Mutant",
		power: 65,
	},
	{
		name: "Hulk",
		type: "Human",
		power: 80,
	},
	{
		name: "Magneto",
		type: "Mutant",
		power: 78,
	},
	{
		name: "Iron Man",
		type: "Human",
		power: 60,
	},
];

//1º Cambiamos la propiedad type por specie
//2º Me quedo solamente con los mutantes
//3º Calculo el total del poder de los mutantes
const total = marvelCharacters
	.map((character) => ({
		name: character.name,
		specie: character.type,
		power: character.power,
	}))
	.filter((character) => character.specie === "Mutant")
	.reduce((acc, character) => acc + character.power, 0);

console.log(total);

//ASI MEJOR ->

const newMarvelCharacters = marvelCharacters.map((character) => ({
	name: character.name,
	specie: character.type,
	power: character.power,
}));
const mutants = newMarvelCharacters.filter(
	(character) => character.specie === "Mutant"
);
const totalPower = mutants.reduce((acc, character) => acc + character.power, 0);
