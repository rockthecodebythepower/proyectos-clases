//FILE SYSTEM
import fs from "fs";

//Creamos un array de objetos
const list = [
	{
		name: "CocaCola",
		price: 2,
	},
	{
		name: "Patatas",
		price: 1,
	},
	{
		name: "Agua",
		price: 1.5,
	},
	{
		name: "Queso",
		price: 3,
	},
];

//Convertimos nuestra lista a JSON
const listJSON = JSON.stringify(list);

//A través de FILE SYSTEM vamos a crear un fichero
fs.writeFile("list.json", listJSON, () => {
	console.log("Datos creados!");
});
