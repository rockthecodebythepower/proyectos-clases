export const preguntas = [
  {
    name: "name",
    message: "¿Cómo te llamas?",
    default: "Peter Parker",
  },
  {
    type: "list",
    name: "city",
    message: "¿Cuál es la capital de España?",
    choices: ["Zaragoza", "Madrid", "Chile", "Casa de Campo"],
  },
  {
    type: "list",
    name: "javascript",
    message: "¿En qué lado se ejecuta JavaScript?",
    choices: [
      "En el ordenador",
      "En el lado del servidor",
      "En el lado del cliente",
      "En la cocina",
    ],
  },
  {
    type: "list",
    name: "suma",
    message: "¿2+2?",
    choices: ["0,444434234525", "4", "22", "2"],
  },
];
