export const preguntas:pregunta[] = [
  {
    dificultad: 1,
    pregunta: "¿Para qué sirve TypeScript?",
    opciones: [
      "Para hacer nutella",
      "Para hacer tipos de comida",
      "Para tipar las variables de nuestro código y así no cambiarlas sin querer nunca durante el desarrollo del proyecto, evita equivocaciones",
      "Para hacer proyectos mega enormes",
    ],
    respuestaCorrecta:
      "Para tipar las variables de nuestro código y así no cambiarlas sin querer nunca durante el desarrollo del proyecto, evita equivocaciones",
    persona: {
      nombre: "paquito"
    }
  },
  {
    dificultad: 1,
    pregunta: "¿Cómo funciona un contexto?",
    opciones: [
      "Para gestionar el estado de un componente",
      "Para proveer a mis componentes hijos de unos datos y que estos puedan usarlos cuando les apetezca ahorrandome el prop drilling",
      "Para proveer a mis componentes hijos de funciones",
      "Para nada",
    ],
    respuestaCorrecta:
      "Para proveer a mis componentes hijos de unos datos y que estos puedan usarlos cuando les apetezca ahorrandome el prop drilling",
  },
];

interface pregunta {
  dificultad: number,
  pregunta: string,
  opciones: string[],
  respuestaCorrecta: string,
  persona?: persona
}

interface persona {
  nombre: string
}