//Literal string
const name = "Peter";
const lastName = "Parker";

const fullName = `${name} ${lastName}`;
const quote = `${fullName} tiene ${2023 - 1990} años.`;
console.log(quote);

//Template strings
const template = `
<ul>
    <li>${name}</li>
    <li>${lastName}</li>
</ul>`;

//Object Destructuring
const comic = {
	title: "El Guantelete del Infinito",
	year: 1991,
	author: "Jim Starlin",
	editorial: "Marvel",
	characters: {
		mainHero: "Doctor Strange",
		mainVillain: "Thanos",
	},
};

/* const comicTitle = comic.title;
const comicYear = comic["year"]; */

const {title, year, editorial} = comic;
const {mainHero} = comic.characters;
console.log(title);

//Spread Operator -> ...
const heroes = ["Spiderman", "Daredevil", "Hulk", "Jessica Jones"];
const villains = ["Thanos", "Galactus", "Red Skull", "Dr. Octopus"];

const characters = [...heroes, ...villains];
console.log(characters);
const newCharacters = [...characters, "Rocket", "Gamora"];
console.log(newCharacters);

//Ejemplo modificando
let list = [];
list = [...list, "Pan"];
list = [...list, "Galletas"];
list = [...list, "Queso"];
console.log(list);

//String
const movie = "BATMAN";
const movieCharacters = [...movie];
console.log(movieCharacters);

//Funciones
const sum = (numA, numB, numC) => {
	console.log(numA + numB + numC);
};

const numbers = [5, 15, 25];

sum(...numbers);

//Objetos
const firstObject = {
	firstName: "Peter",
	age: 25,
};

const secondObject = {
	lastName: "Parker",
	alterEgo: "Spider-Man",
};

const newObject = {...firstObject, ...secondObject, city: "New York"};
console.log(newObject);

//MAP
const humans = ["😀", "😀", "😀", "😀"];
const zombies = humans.map((human) => "🧟");
console.log(zombies);

const players = [
	{
		name: "Cristiano Ronaldo",
		points: 125,
	},
	{
		name: "Messi",
		points: 256,
	},
	{
		name: "Ronaldo",
		points: 98,
	},
];

const playerPoints = players.map((player) => player.points);
console.log(playerPoints);

const moreInfoPlayers = players.map((player) => ({
	nombre: player.name.toLowerCase(),
	puntos: player.points * 2,
	activo: true,
}));

console.log(moreInfoPlayers);

/* const newPokemonArray = pokemons.map((pokemon) => ({
    name: pokemon.name,
    weight: pokemon.weight / 10,
    height: pokemon.height / 10,
    image: pokemon.sprites.other["official-artwork"].front_default
}))

<img src=${pokemon.image} alt=${pokemon.name}/> */

//Filter
const pilots = [
	{rank: 2, name: "Wedge Antilles", faction: "Rebels"},
	{rank: 8, name: "Ciena Ree", faction: "Empire"},
	{rank: 40, name: "Iden Versio", faction: "Empire"},
	{rank: 66, name: "Thane Kyrell", faction: "Rebels"},
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);

const bestPilots = pilots.filter((pilot) => pilot.rank > 35 && pilot.rank < 65);
console.log(bestPilots);

const searchPilot = (word) => {
	const pilotsWithAD = pilots.filter((pilot) =>
		pilot.name.toLowerCase().includes(word.toLowerCase())
	);
	console.log(pilotsWithAD);
};

searchPilot("d");
searchPilot("wEdg");
