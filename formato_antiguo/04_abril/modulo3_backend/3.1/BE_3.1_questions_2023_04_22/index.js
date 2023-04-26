//Importamos inquirer para hacer las preguntas y almacenar las respuestas
import inquirer from "inquirer"
//Importamos chalk para modificar los colores de los mensajes de la consola
import chalk from "chalk"
//Importamos las preguntas
import {questions} from "./questions.js"
//Importamos las películas
import {movies} from "./movies.js"

//Mostramos un mensaje de bienvenida con chalk
console.log(
  `${chalk.blue.bold(
    "Descubre cuál es tu película favorita de"
  )} ${chalk.yellow.bold("Star Wars")}`
)

//Inquirer va a lanzar las questions y va a almacenar todas las respuestas en el objeto answers
inquirer.prompt(questions).then((answers) => {
  //1º Comparamos las respuestas del usuario con las opciones de cada una de las películas, y encontramos la que más coincidencias tenga:
  const result = Object.keys(movies).reduce(
    (prev, curr) => {
      //En el prev se acumularán las claves y en el curr se almacenara el indice de la película actual
      const movie = movies[curr]
      //2º Por cada una de las claves de cada una de las películas recogeremos cada una de las respuestas del usuario y contaremos como 1 si coincide y como 0 si no coincide
      const matches = Object.keys(movie).reduce(
        (count, key) => count + (answers[key] === movie[key] ? 1 : 0),
        0 //Inicializamos el count en 0
      )
      //3º Si las respuestas del usuario coinciden con más opciones de la película actual que de la película anterior, actualizamos el resultado. Si no nos quedaremos con la anterior.
      if (matches > prev.matches) {
        return {movie: curr, matches}
      } else {
        return prev
      }
    },
    {movie: "", matches: 0}
  )
  //Mostramos el resultado por consola
  console.log(
    `Tu película favorita es: ${chalk.bold.blue(result.movie)}, por ${
      result.matches
    }/4 coincidencias.`
  )
})
