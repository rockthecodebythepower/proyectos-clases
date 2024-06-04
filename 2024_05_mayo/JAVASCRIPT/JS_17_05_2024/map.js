const comidas = [
  {
    nombre: "Manzana",
    saludable: true,
  },
  {
    nombre: "Kebab",
    saludable: false,
  },
  {
    nombre: "Pizza",
    saludable: false,
  },
  {
    nombre: "Naranja",
    saludable: true,
  },
  {
    nombre: "Mandarina",
    saludable: true,
  },
];

//? saber que le tengo que enviar a ese método para que funcione - función que tiene que retornar algo
//? saber que provoca / para que sirve este método - generar un nuevo array de tantos elementos como tenga nuestro array original con diferente contenido
//? saber que me duelve este método - devuelve un nuevo array

console.log(comidas.map((comida) => comida.saludable ? "💛" : "💔"));