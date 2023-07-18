//? Crea una función llamada numeroMayor() que toma un array de números como entrada y retorna el numero mayor de ellos.

const numeros = [3, 4, 5, 6, 67, 23, 23, 23, 234, 345, 54, 45, 23];
const numeros2 = [23, 3, 4, 34, 345, 534, 453, 534, 54, 45, 54, 45];

const numeroMayor = (arrayNumeros) => {
  // empiezo de 0 la lógica del ejercicio

  // vamos a crear una variable para guardar cual es el numero más grande.
  // con esta variable primero guardo el primer número de mi array (porque si no he comprobado ninguno todavía el más grande es el primero).

  let mayor = arrayNumeros[0];

  for (let i = 1; i < arrayNumeros.length; i++) {
    // comprobar si el siguiente número es más grande que el mayor que teníamos guardado, en caso de serlo tendremos un nuevo número mayor y seguirá haciendo comprobaciones iguales hasta que termine el bucle
    if (arrayNumeros[i] > mayor) {
      mayor = arrayNumeros[i];
    }
  }

  return mayor;
};

/* const numeroMayor = (arrayNumeros) => {
    const nuevoArray = [...arrayNumeros];
    return nuevoArray.sort((a, b) => b - a)[0];
} */


// pasar el array como parámetro
console.log(numeroMayor(numeros)); // ejecutar la función y de alguna manera obtener el resultado esperado

console.log(numeroMayor(numeros2));

console.log(numeroMayor([3, 43, 54, 45, 54, 45, 4, 5, 5, 23, 3]));


console.log(numeros);