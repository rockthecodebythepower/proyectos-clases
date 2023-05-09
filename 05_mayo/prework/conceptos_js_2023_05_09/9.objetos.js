const movie = {
	title: "Titanic",
	year: 1997,
	director: "James Cameron",
	cast: ["Leonardo DiCaprio", "Kate Winslet"],
	genre: "Drama",
	company: "Fox",
	action: () => {
		console.log("Se hunde el barco!");
	},
};

//Cómo acceder a las claves o keys
console.log(movie.title);
console.log(movie["title"]);

movie.action();

//Podemos iterar un objeto
//Como key en un bucle forin es un string, tengo que utilizar la manera de acceder con corchetes, porque no puedo poner un string después de un punto
for (let key in movie) {
	console.log(`La clave ${key} tiene el valor: ${movie[key]}`);
}
