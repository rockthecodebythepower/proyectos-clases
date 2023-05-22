import "./Main.css";
import {getIssues} from "../../utils/utils";
import Spinner from "../Spinner/Spinner";

const template = () => {
	return `
    <h2>Issues</h2>
    <input type="text" placeholder="Issue title..." id="issue-input"/>
    <button id="search-issue-btn">Search</button>
	<div id="spinner-container">
	</div>
    <ul id="issues-container"></ul>
    `;
};

const printIssues = async (name) => {
	//Recuperamos el contenedor donde pintaremos los issues
	const container = document.querySelector("#issues-container");
	//Vaciamos el contenedor cada vez que lo pintemos para que no se acumulen los resultados
	container.innerHTML = "";
	//Recuperamos el div del spinner
	const spinnercontainer = document.querySelector("#spinner-container");
	//Antes de hacer la petición, insertamos el Spinner
	spinnercontainer.innerHTML = Spinner();
	//Hacemos la petición con async await para resolverla y almacenamos el resultado en una constante
	const data = await getIssues(name);
	const issues = data.results;
	//Cuando termina la petición y empezamos a pintar, eliminamos el spinner del contenedor
	spinnercontainer.innerHTML = "";
	//Recorremos los tomos...
	for (const issue of issues) {
		const li = document.createElement("li");
		li.innerHTML = `
        <img src=${issue.image.medium_url} alt=${issue.name} loading="lazy" />
        <h3>${issue.name}</h3>
        ${issue.description === null ? "" : issue.description}
        `;
		container.appendChild(li);
	}
};

const listeners = () => {
	const input = document.querySelector("#issue-input");
	const btn = document.querySelector("#search-issue-btn");
	btn.addEventListener("click", () => {
		printIssues(input.value);
	});
};

export const printTemplate = async () => {
	document.querySelector("main").innerHTML = template();
	printIssues("Guardians of the Galaxy");
	listeners();
};
