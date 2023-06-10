const personas = [
  {
    nombre: "Alejandro", //! 23098457203945
  },
  {
    nombre: "Jeniffer",
  },
  {
    nombre: "Manu",
  },
  {
    nombre: "Eva", //! asldjflaskdfkls
  },
  {
    nombre: "Rubén",
  },
  {
    nombre: "Santi",
  },
];

//! el some es un método de arrays que devolverá un valor booleano si el array incluye lo que pedimos o no lo incluye
//* el método some recibirá como parámetro una FUNCIÓN que recogerá de los parámetros un elemento del array y retornará una condición

console.log(personas.some((persona) => persona.nombre === "Rubén"));
