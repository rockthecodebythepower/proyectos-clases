//! métodos no cubren una necesidad - mejoran sintaxis

const zapatillas = [
  {
    nombre: "Nike air Max",
    precio: 250,
  },
  {
    nombre: "Nike Bad Bunny",
    precio: 100,
  },
  {
    nombre: "Nike Simpson",
    precio: 200,
  },
  {
    nombre: "Nike Max 1",
    precio: 500,
  },
];

// lo que quiere ver el usuario son zapatillas más baratas de 190
let precioElegido = 240;

/* const filtered = [];

for (const zapatilla of zapatillas) {
    if (zapatilla.precio <= precioElegido) {
        filtered.push(zapatilla);
    }
}

console.log(filtered); */

//! el método filter me crea un NUEVO array partiendo de una condición que se debe cumplir en nuestros elementos
const filtered = zapatillas.filter((zapatilla) => zapatilla.precio <= precioElegido);

console.log(filtered);

//! el map me devuelve un NUEVO array de la misma longitud pero con los datos modificados
const modified = zapatillas.map((zapatilla) => zapatilla.precio);

console.log(zapatillas);
console.log(modified);

//! find - me devuelve el primer elemento encontrado que cumpla la condición
const found = zapatillas.find((zapatilla) => zapatilla.precio >= 450);

console.log(found);

//! some - me da true o false dependiendo de si se encuentra algún elemento que cumpla con la condición aportada
console.log(zapatillas.some((zapatilla) => zapatilla.precio > 400));

//! every - me da true o false dependiendo de si TODOS los elementos cumplen con la condición aportada
console.log(zapatillas.every((zapatilla) => zapatilla.precio > 10));

//! reduce - me va a servir para acumular valores de manera más sencilla
console.log(zapatillas.reduce((acc, zapatilla) => acc += zapatilla.precio, 0));