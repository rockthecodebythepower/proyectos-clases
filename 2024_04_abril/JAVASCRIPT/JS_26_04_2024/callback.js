// Ejemplos

/* array.forEach(); */

/* const forEach = (array, callback) => {
  for (const element of array) {
    callback(element);
  }
};
 */
const array = ["slkf", "sda", "asdlmf", "asdlfm"];

/* const funcion = (element) => {
  console.log(element);
};

forEach(array, funcion); */

const funcion = (elemento) => {
  console.log(elemento);
};

/* array.forEach(funcion); */

// el método filter, recorre un array y me duelve un NUEVO array con los datos filtrados

const productos = [
  {
    name: "Menú de lujo",
    precio: 100,
  },
  {
    name: "Funko pop",
    precio: 35,
  },
  {
    name: "Cena para dos",
    precio: 57,
  },
  {
    name: "Pista de padel",
    precio: 24,
  },
  {
    name: "mando de la play",
    precio: 89,
  },
  {
    name: "10 chicles",
    precio: 1,
  },
];

const resultado = productos.filter((element) => element.precio <= 80);
console.log(resultado);
