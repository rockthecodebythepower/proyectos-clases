import "./Gallery.css";

let pageNum = 1;

const template = () => {
	return `
    <h2>Browse Databank</h2> 
    <ul class="gallery-container"></ul>
    <button id="showmorebtn">Show more</button>
    `;
};

const printCharacters = (characters) => {
	const container = document.querySelector(".gallery-container");
	for (const character of characters) {
		const li = document.createElement("li");
		li.innerHTML = `
        <img src=${character.image} alt=${character.name}/>
        <h3>${character.name}</h3>
        <p>${character.description}</p>
        `;
		container.appendChild(li);
	}
};

const getCharacters = async () => {
	const data = await fetch(
		`https://starwars-databank-server.vercel.app/api/v1/characters?page=${pageNum}&limit=20`
	);
	const dataJSON = await data.json();
	const characters = dataJSON.data;
	printCharacters(characters);
	pageNum++;
	if (pageNum >= 5) {
		document.querySelector("#showmorebtn").remove();
	}
};

export const Gallery = () => {
	document.querySelector("main").innerHTML = template();
	getCharacters();
	document.querySelector("#showmorebtn").addEventListener("click", () => {
		getCharacters();
	});
};
