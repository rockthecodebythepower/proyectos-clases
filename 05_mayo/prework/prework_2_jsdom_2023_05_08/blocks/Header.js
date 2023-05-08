const changeTheme = () => {
	document.body.classList.toggle("dark");
	//El método contains devuelve un booleano si la clase existe en el documento
	const theme = document.body.classList.contains("dark");
	//Recuperamos el botón por querySelector
	const btn = document.querySelector("#themeBtn");
	//Si dark existe cambiamos el texto del botón por un sol y si no por una luna
	theme ? (btn.textContent = "🌞") : (btn.textContent = "🌑");
};

const Header = () => {
	//1º Crear el elemento header
	const header = document.createElement("header");
	//2º Crear el título que va en el header
	const h1 = document.createElement("h1");
	//3º Le vamos a dar la clase "title" al h1
	h1.classList.add("title");
	//4º Le damos contenido de texto al titulo
	h1.textContent = "Sci-fi books";
	//5º Le insertamos el h1 al header
	header.appendChild(h1);
	//6º Creamos un botón
	const btn = document.createElement("button");
	//Cuando hagamos click en el botón se ejecutará changeTheme
	btn.onclick = changeTheme;
	//Le añadimos un id para recuperarlo en la función changeTheme
	btn.id = "themeBtn";
	//Le damos texto al botón
	btn.innerText = "🌑";
	//Insertamos el botón en el header
	header.appendChild(btn);
	//Insertamos en el body nuestro header
	document.body.appendChild(header);
};

export default Header;
