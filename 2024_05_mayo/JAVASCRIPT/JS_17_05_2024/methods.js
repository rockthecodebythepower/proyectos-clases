// EL FILTER ES UN MÉTODO DE ARRAYS QUE NOS PERMITE FILTRAR ESE MISMO ARRAY
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
]; // infiere el tipo.

// saber cómo funcionan
// saber que le tengo que enviar a ese método para que funcione ✅
// saber que provoca este método ✅
// saber que me duelve este método ✅

console.log(libros.pop());
//! explicación método pop
//? 1: información necesaria para funcionamiento: () -> nada
//? 2: es un método que MODIFICA el array original - elimina el último valor del array
//? 3: este método devuelve el elemento que ha eliminado del array

console.log(libros.push({ title: "Los pilares de la tierra", author: "Ken Follet" }));
//! explicación método push
//? 1: información necesaria para funcionamiento: () -> tantos elementos como quieras añadir en el array
//? 2: es un método que MODIFICA el array original - añade el o los elementos que desees al FINAL del array
//? 3: devuelve la nueva longitud de nuestro array