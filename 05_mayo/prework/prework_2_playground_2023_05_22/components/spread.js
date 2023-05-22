import "./spread.css";

const template = () => {
	return `
    <h2>Spread</h2>
    <label for="emoji-input">Inserta un emoji compuesto</label>
    <input id="emoji-input" type="text" />
    <h3 id="emojiRes"></h3>
    `;
};

const listeners = () => {
	//Le añadimos un evento input al emoji-input
	document.querySelector("#emoji-input").addEventListener("input", (ev) => {
		//Con spread operator separamos los caracteres del value
		const result = [...ev.target.value];
		//Recuperamos el h3 del html, mapeamos result y pintamos cada uno de los elementos dentro.
		document.querySelector("#emojiRes").innerHTML = result.join(" ");
	});
};

export const printTemplate = () => {
	document.querySelector("#spread").innerHTML = template();
	listeners();
};
