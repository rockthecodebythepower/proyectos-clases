//Vamos a crear un array con cada una de las preguntas del cuestionario
export const questions = [
  {
    type: "list",
    name: "character",
    message: "¿Cuál es tu personaje favorito?",
    choices: [
      "Qui-Gon Jinn",
      "Anakin Skywalker",
      "Darth Sidious",
      "Han Solo",
      "Yoda",
      "Luke Skywalker",
      "Rey",
      "Kylo Ren",
      "Emperador Palpatine",
    ],
  },
  {
    type: "list",
    name: "side",
    message: "¿De qué lado estás?",
    choices: ["La Fuerza", "El lado oscuro"],
  },
  {
    type: "list",
    name: "planet",
    message: "¿Cuál es tu planeta favorito?",
    choices: [
      "Tatooine",
      "Geonosis",
      "Coruscant",
      "Dagobah",
      "Endor",
      "Jakku",
      "Crait",
      "Exegol",
    ],
  },
  {
    type: "list",
    name: "power",
    message: "¿Qué poder de la Fuerza prefieres tener?",
    choices: [
      "Telequinesis",
      "Visión",
      "Relámpago",
      "Ninguno",
      "Teletransporte",
      "Curación",
      "Control mental",
      "Conexión de la Fuerza",
      "Resurreción",
    ],
  },
]
