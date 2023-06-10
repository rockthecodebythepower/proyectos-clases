const colores = ["azul", "amarillo", "amarillo",  "púrpura"];
//                 0         1           2             3

//! el indexOf es un método de arrays que devolverá la posición del elemento si se encuentra en el array, de no ser encontrado devolverá el valor -1
//* el método indexOf recibirá como parámetro lo que se quiera buscar

console.log(colores.indexOf("amarillo"));

const personas = [
  {
    nombre: "Alejandro" //! 23098457203945
  },
  {
    nombre: "Jeniffer"
  },
  {
    nombre: "Manu"
  },
  {
    nombre: "Eva"//! asldjflaskdfkls
  },
  {
    nombre: "Rubén"
  },
  {
    nombre: "Santi"
  },
];

const user = personas[3];

//! los objetos indexOf(290385703945)
console.log(personas.indexOf(user));