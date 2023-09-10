const numeros = [2, 3244, 2, 34, 23, 4, 23, 432, 4, 324, 2, 5];

const impares = numeros.filter((numero) => numero % 2 === 1);

console.log(impares);

numeros.push(8);

// por cada
numeros.foreach((numero) => {
    // aqui dentro va el código que quiero hacer por cada elemento que tengo en mi array
});

console.log(numeros);