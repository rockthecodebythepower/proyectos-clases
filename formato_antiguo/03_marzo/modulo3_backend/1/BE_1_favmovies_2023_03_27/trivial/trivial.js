import chalk from "chalk";
import inquirer from "inquirer";

import { preguntas } from "./preguntas.js";

console.log(`${chalk.blue.bold("Bienvenidos al Trivial")}`);

inquirer.prompt(preguntas).then((answers) => {
  let count = 0;

  if (answers.city === "Madrid") {
    count += 1;
  }
  if (answers.javascript === "En el lado del cliente") {
    count += 1;
  }
  if (answers.suma === "4") {
    count += 1;
  }

  console.log(
    count === 3
      ? `Enhorabuena ${answers.name}, has acertado todas las preguntas`
      : `Has acertado ${count} preguntas ${answers.name}, sigue intentándolo`
  );
});
