const fs = require("fs");

//Con el método readFile vamos a leer  y vamos a controlar los errores, ya que puede que el fichero esté mal o tenga un contenido no aceptado
fs.readFile("movies.json", (error, movies) => {
  if (error) {
    console.log("Hubo un error leyendo el fichero!", error);
  } else {
    //Obtenemos los datos que están en formato JSON, lo parseamos para transormarlos a JavaScript y lo mostramos por consola
    const parsedMovies = JSON.parse(movies);
    console.log(parsedMovies);
  }
});
