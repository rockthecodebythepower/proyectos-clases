import "./emojis.css";
import {emojilist} from "../data/data";

const template = () => {
	return `
    <h2>Emojis</h2>
    <article class="emoji-list">
    ${emojilist.map((emoji) => `<p>${emoji.value}</p>`).join("")}
    </article>
    <div id="btns-container">
        <button id="">All</button>
        <button id="face">Faces</button>
        <button id="animal">Animals</button>
        <button id="sports">Sports</button>
    </div>
    `;
};

const filter = (keyword) => {
	//Filtramos los emojis por la keyword comparando su propiedad type. Hemos puesto includes para que el botón All lance el string vacío, el cual mostrara todos los emojis sin distinción
	const filteredEmojis = emojilist.filter((emoji) =>
		emoji.type.includes(keyword)
	);
	//Recuperamos el elemento donde están pintamos los emojis originales y pintamos los filtrados
	document.querySelector(".emoji-list").innerHTML = filteredEmojis
		.map((emoji) => `<p>${emoji.value}</p>`)
		.join("");
};

const listeners = () => {
	//Recuperamos todos los botones
	const allEmojiBtns = document.querySelectorAll("#btns-container > button");
	//Le vamos a añadir un evento click a cada uno de los botones
	allEmojiBtns.forEach((btn) =>
		btn.addEventListener("click", () => filter(btn.id))
	);
};

export const printTemplate = () => {
	//Primero nos aseguramos que el HTML está inyectado en el documento
	document.querySelector("#emojis").innerHTML = template();
	//Después añadimos los listeners o funcionalidades
	listeners();
};
