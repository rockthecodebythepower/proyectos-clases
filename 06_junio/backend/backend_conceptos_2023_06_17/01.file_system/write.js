//Requerimos el paquete de File System
const fs = require("fs");

//Creamos un array de JS de películas
const movies = [
  {
    name: "The Shawshank Redemption",
    year: 1994,
  },
  {
    name: "The Godfather",
    year: 1972,
  },
  {
    name: "Pulp Fiction",
    year: 1994,
  },
  {
    name: "The Dark Knight",
    year: 2008,
  },
  {
    name: "Fight Club",
    year: 1999,
  },
];

//Vamos a parsear a JSON-string nuestro array de objetos:
const moviesJSON = JSON.stringify(movies);

//Vamos a usar File System para crear un nuevo fichero en formato json y darle como contenido nuestra constante moviesJSON
fs.writeFile("movies.json", moviesJSON, () => {
  console.log("Fichero movies.json creado!");
});
