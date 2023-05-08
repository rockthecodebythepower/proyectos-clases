import "./Main.css";
import countries from "../../data/data";
import CountryCard from "../CountryCard/CountryCard";

const template = () => {
	return `
    <section class="countries">
        <input type="text" id="searchInput" placeholder="Search country by name, capital or currency..."/>
        <ul class="gallery"></ul>
    </section>
    `;
};

const filterCountries = (ev) => {
	//Filtramos los paises por su nombre, que incluyan el event.target.value, es decir, el valor del input
	const filteredCountries = countries.filter(
		(country) =>
			country.name.toLowerCase().includes(ev.target.value.toLowerCase()) ||
			country.capital.toLowerCase().includes(ev.target.value.toLowerCase()) ||
			country.currency.toLowerCase().includes(ev.target.value.toLowerCase())
	);
	//Recuperamos la lista
	const list = document.querySelector(".gallery");
	//Vaciamos la lista para evitar que se repitan al pintar
	list.innerHTML = "";
	//Hacemos la comprobación si filteredCountries tiene longitud, si no tiene longitud es que no coincide con nada y vamos a darle un mensaje visual al usuario
	if (!filteredCountries.length) {
		list.innerHTML = `<h2 class="alert">Country not found. Try again.</h2>`;
	}
	//Por cada uno de los paises filtrados, los pintamos en la lista
	for (const country of filteredCountries) {
		const li = document.createElement("li");
		li.innerHTML = CountryCard(country);
		list.appendChild(li);
	}
};

const listeners = () => {
	//Gallery
	const list = document.querySelector(".gallery");
	for (const country of countries) {
		const li = document.createElement("li");
		li.innerHTML = CountryCard(country);
		list.appendChild(li);
	}
	//Input
	//Recuperamos el botón
	const searchInput = document.querySelector("#searchInput");
	//El evento input se lanza cada vez que modificamos el valor del input, le podemos pasar a la función filterCountries el evento, para que pueda leer el valor del input
	searchInput.addEventListener("input", (ev) => {
		console.log(ev);
		filterCountries(ev);
	});
};

export const printTemplate = () => {
	document.querySelector("main").innerHTML = template();
	listeners();
};
