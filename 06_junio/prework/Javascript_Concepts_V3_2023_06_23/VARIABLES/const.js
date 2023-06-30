//! const es la palabra reservada para crear variables CONSTANTES (es la que más utilizo);

//? const se utiliza mucho para intentar evitarte errores próximos, es lo mismo que let pero un poco más estricto, no se puede reasignar;

/* const numero = 5;

numero = 6;

console.log(numero); */

//? para objetos y arrays es muy positivo el const

const persona = {
    nombre: "Pedro",
    edad: 23
}

/* persona = {
    nombre: "Paquito",
    edad: 23
} */

persona.nombre = "Paquito";

console.log(persona);