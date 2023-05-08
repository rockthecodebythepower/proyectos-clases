import sciFiBooks from "../data/data";

const Main = () => {
	const main = document.createElement("main");
	//1º Creamos el listado
	const ul = document.createElement("ul");
	ul.classList.add("gallery");
	//2º Recorremos los libros
	for (const book of sciFiBooks) {
		//3º Por cada uno de los libros creamos un li
		const li = document.createElement("li");
		//4º CREAMOS EL CONTENIDO DE LOS LI
		//Creamos el titulo del libro
		const h3 = document.createElement("h3");
		h3.textContent = book.title;
		li.appendChild(h3);
		//Creamos la portada del libro
		const img = document.createElement("img");
		img.src = book.cover;
		img.alt = book.title + " cover";
		li.appendChild(img);
		//Crear el autor
		const h4 = document.createElement("h4");
		h4.textContent = book.author;
		li.appendChild(h4);
		//Creamos el año
		const p = document.createElement("p");
		p.textContent = book.year;
		li.appendChild(p);
		//5º Le insertamos cada uno de los li a la lista
		ul.appendChild(li);
	}
	//6º Cuando ya tenemos todos los li en el ul (estamos fuera del bucle), le insertamos la lista al main
	main.appendChild(ul);
	//7º Insertamos el main en nuestro documento
	document.body.appendChild(main);
};

export default Main;
