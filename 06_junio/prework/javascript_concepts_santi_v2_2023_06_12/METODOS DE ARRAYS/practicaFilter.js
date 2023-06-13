//? ENUNCIADO: TENEMOS UN ARRAY DE LIBROS Y QUEREMOS UN FILTRO QUE ME ENCUENTRE LOS LIBROS DE UN AUTOR EN ESPECÍFICO, DE UN GÉNERO EN ESPECÍFICO Y DE UN PRECIO MÁXIMO - Author: "Carlos Ruiz Zafón" género: "Misterio" PrecioMáximo: 23;

//* encontrar los libros que cumplan esta condición

const libros = [
  {
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    genero: "Novela",
    precio: 15,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia ficción",
    precio: 12,
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela",
    precio: 20,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Novela",
    precio: 18,
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "Ciencia ficción",
    precio: 10,
  },
];

//! JENIFFER

//! RUBÉN
console.log(libros.filter((libro) =>libro.autor.includes("Gabriel García") &&libro.precio <= 23 &&libro.genero.includes("Novela")));

//! MANU

//! SANTI

//! Alejandro

