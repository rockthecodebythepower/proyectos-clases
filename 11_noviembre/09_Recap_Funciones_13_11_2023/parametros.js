const funcionEjemplo = (a, b) => {
  // una suma de un número con otro número
};

// estamos en una tienda de ropa en España
const calcularIVA = (precioIncial) => {
  // quiero calcular el precio final de un producto con el IVA añadido
  // 21%
};

//! splice, es6...
//! no conozco el método push NO podemos utilizarlo, PERO en nuestro amplio código de un proyecto súper importante que va a tener más de 1000000 de líneas de código voy a necesitar muchas veces insertar elementos dentro de un array, de uno en uno

// necesitamos una funcionalidad que tendremos que desarrollar la funcionalidad es que tendré un array y le podré insertar un elemento

const insertar = ({ elemento, array }) => {
  array[array.length] = elemento;
  console.log(array);
};

let arrayNombres = ["Paquito", "Martín", "Tom Nook", "Pepito"];

insertar({ array: arrayNombres, elemento: "The Cat" }); // 4
insertar({ elemento: "🖤", array: ["❤", "🧡", "💛", "💚", "💙"] }); // 5
insertar({ array: [1, 2, 3], elemento: 4 }); // 3