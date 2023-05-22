import "./superheroes.css";
import {superherolist} from "../data/data";

const template = () => {
	return `
    <h2>Superheroes filter</h2>
    <input type="text" placeholder="Search by name or location..." id="superhero-input"/>
    <ul id="superheroes-container"></ul>
    `;
};

//Esta función pinta una lista en el contenedor
const printList = (list) => {
	//Recuperamos el contenedor
	const container = document.querySelector("#superheroes-container");
	//Para que no se repitan los elementos con la busqueda, vaciamos el contenedor cada vez que printList se ejecute
	container.innerHTML = "";
	//Recorremos la lista que pasamos por argumento
	for (const item of list) {
		//Por cada uno de los elementos creamos un elemento li
		const li = document.createElement("li");
		//Le damos contenido HTML
		li.innerHTML = `
        <h3>${item.name}</h3>
        <h4>${item.location}</h4>
        <h4>🦾 ${item.power}</h4>
        `;
		//Por cada uno de los elementos lo inyectamos como hijo en el contenedor
		container.appendChild(li);
	}
};

const inputListener = () => {
	//Recuperamos el input
	const searchInput = document.querySelector("#superhero-input");
	//Le añadimos el evento input que se lanzará cada vez que modifiquemos el input
	searchInput.addEventListener("input", (ev) => {
		//Gracias a filter crearemos un nuevo array con solo las coincidencias de la condición
		const filteredSuperheroes = superherolist.filter(
			(superhero) =>
				//Pasamos name a minuscula y el valor del input a minuscula para igualarlos en la comparación y poder compararlos sin depender del case
				superhero.name.toLowerCase().includes(ev.target.value.toLowerCase()) ||
				superhero.location.toLowerCase().includes(ev.target.value.toLowerCase())
		);
		//Volvemos a utilizar printList para pintar los superheroes
		if (filteredSuperheroes.length > 0) {
			printList(filteredSuperheroes);
		} else {
			//Si filteredSuperheroes no tiene longitud (es decir, no hay ninguna coincidencia, vamos a pintar un mensaje en el contenedor)
			//Recuperamos el contenedor
			const container = document.querySelector("#superheroes-container");
			container.innerHTML = `<h3>Superhero not found</h3>`;
		}
	});
};

export const printTemplate = () => {
	//1º Pintamos el template en el documento
	document.querySelector("#superheroes").innerHTML = template();
	//2º A partir de aquí podemos modificar el DOM
	printList(superherolist);
	inputListener();
};
