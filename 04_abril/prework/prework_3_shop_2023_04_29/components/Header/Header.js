import "./Header.css";

const template = () => {
	//Recuperamos header
	const header = document.querySelector("header");
	//Creamos un nodo imagen vacío
	const image = document.createElement("img");
	//Le añadimos el src
	image.src = "/logo.gif";
	//Le añadimos el alt
	image.alt = "Liquid logo animation";
	//Le vamos a añadir una clase
	image.classList.add("logo");
	//Añadimos la imagen al header
	header.appendChild(image);
};

export const printTemplate = () => {
	template();
};
