//! UN CALLBACK ES UNA FUNCIÓN QUE ENVIAMOS A OTRA FUNCIÓN Y LA PRIMERA ES EJECUTADA POR LA SEGUNDA.

/* function sumar(num1, num2, funcion) {
  console.log(num1 + num2);

  funcion("pepito");
}

sumar(4, 8, (dato) => {
  console.log("He terminado de sumar " + dato);
});
 */


/* function sumar (num1, num2) {
    console.log(num1 + num2);
}

const numeros = [4, 5, 6, 7, 32, 2, 5, 6, 7, 3, 2, 4, 56, 456];
const numeros2 = [23, 43, 5, 346, 34, 3, 5434, 523, 5, 23, 523];

function sumarNumCadaElemento (array, numero, funcion) {

    for (const elemento of array) {
        funcion(elemento, numero)
    }

}

sumarNumCadaElemento(numeros, 1, sumar);

console.log("Espacio entre funciones");

sumarNumCadaElemento(numeros2, 5, sumar) */


function calcularDescuento (precio, descuento) {

    //! el código que pongamos dentro de las llaves será lo que haga la función
    //? para calcular el descuento de un producto necesitaremos el precio del producto y el descuento a aplicar

    const resultado = precio * descuento / 100;

    console.log(precio - resultado);

}

const numeros = [4, 5, 6, 7, 32, 2, 5, 6, 7, 3, 2, 4, 56, 456];
const numeros2 = [23, 43, 5, 346, 34, 3, 5434, 523, 5, 23, 523];

function calcularDescuentosEnArrays (array, descuento, funcion) {

    for (const elemento of array) {
        funcion(elemento, descuento)
    }

}

calcularDescuentosEnArrays(numeros, 1, calcularDescuento);

console.log("Espacio entre funciones");

calcularDescuentosEnArrays(numeros2, 5, calcularDescuento);