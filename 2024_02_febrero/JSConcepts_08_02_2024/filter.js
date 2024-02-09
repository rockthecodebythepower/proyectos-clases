const listaDeComidas = [
  {
    nombre: "naranja",
    sano: true,
  },
  {
    nombre: "platano",
    sano: true,
  },
  {
    nombre: "bollito",
    sano: false,
  },
  {
    nombre: "gofre",
    sano: false,
  },
  {
    nombre: "pasta",
    sano: true,
  },
  {
    nombre: "lechuga",
    sano: true,
  },
  {
    nombre: "nocilla",
    sano: false,
  }
];

/* const comidasSanas = [];

for (const comida of listaDeComidas) {
    if (comida.sano === true) {
        // sabemos que la comida que veamos es sana
        comidasSanas.push(comida);
    }
}

console.log(comidasSanas); */

console.log(listaDeComidas.filter((comida) => comida.sano));