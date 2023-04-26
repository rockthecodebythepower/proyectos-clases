import inquirer from "inquirer"
import fs from "fs"

let emptyPackage = {
  name: "",
  type: "",
  main: "",
  license: "",
}

inquirer
  .prompt([
    {
      name: "name",
      message: "¿Cuál es tu nombre?",
    },
    {
      type: "confirm",
      name: "type",
      message: "¿Quieres que el proyecto tenga type module?",
      default: "module",
    },
    {
      name: "main",
      message: "¿Cómo se llama tu fichero de entrada?",
      default: "index.js",
    },
    {
      name: "license",
      message: "¿Qué tipo de licencia tienes?",
      default: "MIT",
    },
  ])
  .then((answers) => {
    emptyPackage.name = answers.name
    emptyPackage.type = answers.type ? "module" : ""
    emptyPackage.main = answers.main
    emptyPackage.license = answers.license
    fs.writeFile("custompackage.json", JSON.stringify(emptyPackage), (err) => {
      if (err) throw err
    })
  })
