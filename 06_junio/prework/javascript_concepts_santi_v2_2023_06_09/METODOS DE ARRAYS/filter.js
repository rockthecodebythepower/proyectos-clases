const personas = [
  {
    nombre: "Alejandro", //! 23098457203945
    nivelDeGuay: 10,
  },
  {
    nombre: "Jeniffer",
    nivelDeGuay: 10,
  },
  {
    nombre: "Manu",
    nivelDeGuay: 10,
  },
  {
    nombre: "Eva", //! asldjflaskdfkls
    nivelDeGuay: 10,
  },
  {
    nombre: "Rubén",
    nivelDeGuay: 9,
  },
  {
    nombre: "Santi",
    nivelDeGuay: 9,
  },
];

//! el filter es un método de arrays que devolverá un NUEVO array resultante con los elementos que cumplan la condición indicada por la función
//* el método filter recibirá como parámetro una FUNCIÓN que recogerá de los parámetros un elemento del array y retornará un NUEVO ARRAY resultante

console.log(personas.filter((persona) => persona.nivelDeGuay <= 9 && persona.nombre.includes("a")));