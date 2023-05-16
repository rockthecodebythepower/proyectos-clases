//Arrays
const movies = [
	"El Señor de los Anillos",
	"Dune",
	"El Padrino",
	"Avatar",
	"Bambi",
	"Batman",
];

//Posiciones de un array -> zero-based -> 0,1,2,3,4,5
//Longitud de un array -> 1,2,3,4,5,6

const avatar = movies[3];
console.log(avatar);

//Averiguar la longitud de un array
//GO TO HELL -> gth -> length
console.log(movies.length);

//Métodos que modifican los arrays

//push
movies.push("Peter Pan");
console.log(movies);

//reverse
movies.reverse();
console.log(movies);

//shift
movies.shift();
console.log(movies);

//unshift
movies.unshift("Peter Pan");
console.log(movies);

//pop
movies.pop();
console.log(movies);

//sort -> ordena ALFABETICAMENTE
movies.sort();
console.log(movies);

const numbers = [7, 8, 2, 3, 23, 45, 34, 1, 120, 80];
numbers.sort((a, b) => a - b);
console.log(numbers);

//splice -> Posicion donde empieza + cuantos elementos + Opcional: el elemento o elementos que van en el hueco
movies.splice(3, 2, "Pesadilla antes de Navidad");
console.log(movies);

//Métodos que NO modifican el array
//concat
const newMovies = movies.concat("Akira");
console.log(newMovies);

//toString
console.log(movies.toString());

//join
console.log(movies.join("-"));

//slice
console.log(movies.slice(2, 5));

//indexOf
console.log(movies);
console.log(movies.indexOf("Pesadilla antes de Navidad"));
console.log(movies.indexOf("Cars"));

//includes
console.log(movies.includes("Pesadilla antes de Navidad"));
console.log(movies.includes("Cars"));

//Caso de uso
console.log(movies);
//Quiero quitar Pesadilla ante de Navidad de array, modificandolo
const moviePos = movies.indexOf("Pesadilla antes de Navidad");
console.log(moviePos);
movies.splice(moviePos, 1);
console.log(movies);

//Vamos a comprobar si Batman está en mi listado de peliculas
if (movies.includes("Batman")) {
	console.log("Batman si está en el listado");
} else {
	console.log("Batman no está en el listado");
}
