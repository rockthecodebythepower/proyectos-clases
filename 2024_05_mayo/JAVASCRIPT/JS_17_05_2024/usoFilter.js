const libros = [
  {
    title: "Lágrimas de shiva",
    author: "Carlos Ruiz Zafón",
  },
  {
    title: "Inferno",
    author: "Dan Brown",
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
  },
  {
    title: "Padre rico padre pobre",
    author: "Rober Kiyosaky",
  },
];
//

//? saber que le tengo que enviar a ese método para que funcione - le tengo que pasar una función que retorne true o false ✅
//? saber que provoca este método - filtrado ✅
//? saber que me duelve este método - Devuelve un nuevo array ✅

const filtrados = libros.filter((libro) => libro.author === "Carlos Ruiz Zafón");

console.log(filtrados);
