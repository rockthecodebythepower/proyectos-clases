const pokemon = {
  base_experience: 64,
  height: 7,
  id: 1,
  name: "bulbasaur",
  order: 1,
  types: [
    {
      type: {
        name: "grass",
      },
    },
    {
      type: {
        name: "poison",
      },
    }
  ],
  weight: 69,
};

//! me mostreis en un console.log() el nombre de mi pokemon y sus tipos
console.log(`${pokemon.name}`);

//* LA LONGITUD SIEMPRE SERÁ UN NÚMERO MÁS QUE LA POSICIÓN

/* const tiposPokemon = []

for (let i = 0; i < pokemon.types.length; i++) {
    tiposPokemon.push(pokemon.types[i].type.name)
}

console.log(tiposPokemon); */

const tiposPokemon = pokemon.types.map((tipo) => tipo.type.name);

console.log(tiposPokemon);


//! .map -> devuelve un nuevo array partiendo del array anterior

const productos = [
  { name: "sdolfka", precio: 23, propiedadInnecesaria: false },
  { name: "sdfasdf", precio: 564, propiedadInnecesaria: true },
  { name: "sdolsdfasfka", precio: 43, propiedadInnecesaria: false },
  { name: "sdolffasdfka", precio: 7, propiedadInnecesaria: true },
  { name: "asdfas", precio: 65, propiedadInnecesaria: false },
  { name: "asdf", precio: 4, propiedadInnecesaria: true },
];

const productosMapeados = productos.map((producto) => {
    return {
        name: producto.name,
        precio: producto.precio
    }
});

console.log(productosMapeados);

const productosFiltrados = productosMapeados.filter((producto) => producto.precio > 60);

console.log(productosFiltrados);