//! LOS MÉTODOS NO HACEN COSAS QUE NO PODAMOS HACER SIN ELLOS, PERO NOS SIRVEN PARA HACERLO MÁS RÁPIDO Y SIN TANTA LÓGICA
//! SON FUNCIONES QUE HAN HECHO OTRAS PERSONAS

//? saber que le tengo que enviar a ese método para que funcione - 
//? el primer parámetro es una función callback
    //? el primero parámetro de nuestra función callback, será el acumulador (que tendrá el valor inicial que le hemos pasado al reduce)
    //? el segundo parámetro será cada uno de los elementos del array
    //? el tercer parámetro es el índice en el array de cada uno de los elementos (opcional)
    //? el cuarto parámetro es el array (opcional)
//? el segundo parámetro es el valor inicial

//? saber que provoca / para que sirve este método - para lo que se suele aplicar es para sumas o acumulaciones de números

//? saber que me duelve este método - me devuelve el tipo de dato con el que esté jugando (resultado)

const alumns = [
  {
    nombre: "Paquito",
    notaFinal: 6.9,
  },
  {
    nombre: "Aurora",
    notaFinal: 3,
  },
  {
    nombre: "Javier",
    notaFinal: 9,
  },
  {
    nombre: "David",
    notaFinal: 1,
  },
  {
    nombre: "Aitor",
    notaFinal: 1,
  },
  {
    nombre: "Francisco",
    notaFinal: 7,
  },
  {
    nombre: "Santi",
    notaFinal: 0,
  },
  {
    nombre: "Manolo",
    notaFinal: 8,
  },
  {
    nombre: "Eva",
    notaFinal: 3.5,
  },
];

/* const notaMedia = (array) =>  {
    let suma = 0;
    for (const element of array) {
        suma += element.notaFinal;
    }
    return (suma / array.length).toFixed(2);
}

console.log(notaMedia(alumns)) */

/* console.log((alumns.reduce((acc, b) => acc += b.notaFinal, 0) / alumns.length).toFixed(2)); */

// NaN -> NOT a NUMBER
/* console.log(typeof NaN); */

const numbers = [1, 5, 7, 2, 8, 10, 3, 5, 6, 2];

/* const sumarNumbers = (array) => {
    let suma = 0;
    for (const element of array) {
        suma += element;
    }
    return suma;
}

console.log(sumarNumbers(numbers)); */

console.log(numbers.reduce((acc, e) => acc += e, 0));