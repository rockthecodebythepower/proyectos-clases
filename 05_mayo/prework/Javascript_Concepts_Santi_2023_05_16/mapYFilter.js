const juguetes = [
  {
    nombre: "Pepe",
    color: "green",
  },
  {
    nombre: "Pepito",
    color: "orange",
  },
  {
    nombre: "Luis",
    color: "black",
  },
  {
    nombre: "Juanillo",
    color: "green",
  },
  {
    nombre: "Pablo",
    color: "green",
  },
  {
    nombre: "Ambrosio",
    color: "black",
  },
];

//* miramos los nombres de los juguetes
for (let juguete of juguetes) {
  console.log(juguete.nombre);
}


//! EL MAP es un método de arrays que proviene de ES6 y nos servirá para recorrer un array y modificarlo a nuestro gusto, puesto que el método, al ejecutarse RETORNARÁ un nuevo array resultante;

const colores = juguetes.map((juguete) => {
  return { color: juguete.color };
});

console.log(colores);


//! El FILTER coge cada juguete de juguetes, y retornará los juguetes que cumplan la condición, en este caso que el color del juguete sea green y devolverá el array resultante

const verdes = juguetes.filter((juguete) => juguete.color === "green");

console.log(verdes);