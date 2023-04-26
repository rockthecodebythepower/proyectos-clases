import chalk from "chalk";
import inquirer from "inquirer";
//Con module hay que indicar la extensión del fichero
import { questions } from "./questions.js";
import { movies } from "./movies.js";

console.log(
  `${chalk.blue.bold(
    "Descubre cuál es tu película favorita de "
  )}${chalk.yellow.bold("Star Wars")}`
);

//Hacemos las preguntas al usuario y procesamos las respuestas
inquirer.prompt(questions).then((answers) => {
  //Comparamos las respuestas del usuario con las opcion es de cada película y encontramos la que más coincidencias tenga.
  const result = Object.keys(movies).reduce(
    (prev, curr) => {
      //En prev y curr se almacenarán los indices de las películas actuales
      const movie = movies[curr];
      //Por cada una de las claves de cada una de las películas vamos a recoger también cada una de las respuestas del usuario y contaremos con un 1 si coincide y con un 0 si no coincide
      const matches = Object.keys(movie).reduce(
        (count, key) => count + (answers[key] === movie[key] ? 1 : 0),
        //Inicializamos count en 0
        0
      );

      //Si las respuesats del usuario coinciden con más opciones de la película actual que la anterior (prev), actualizamos el resultado. Si no nos quedamos con la película anterior
      if (matches > prev.matches) {
        return { movie: curr, matches };
      } else {
        return prev;
      }
    },
    { movie: "", matches: 0 }
  );
  //Mostramos la película
  console.log(
    `Tu película favorita de ${chalk.yellow.bold(
      "Star Wars"
    )} es: ${chalk.blue.bold(result.movie)}`
  );
});
