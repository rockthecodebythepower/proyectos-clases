// una variable que contiene un número se guarda en la memoria de la ejecución de mi programa como el nombre de la variable con el valor de la variable

let numero = 10;

//! en memoria: numero = 10

// un tipo de dato complejo se guarda en memoria como un punto de referencia al trozo de memoria donde está guardado

const arrayNumeros = [2, 23, 32, 23, 32, 23, 32, 23];

//                              puntero de memoria -> tengo guardado el array en x sitio
//! en memoria: arrayNumeros = 2u35023985y302498h3g09230g

const nuevoArray = [...arrayNumeros];

//! const nuevoArray = 2u35023985y302498h3g09230g;

nuevoArray.splice(1);

console.log(nuevoArray);

console.log(arrayNumeros);