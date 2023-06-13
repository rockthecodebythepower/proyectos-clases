const colores = ["rojo", "naranja", "azul", "verde", "magenta"];

const numeros = [0, 4, 9, 2, 35, 91];

//! el método sort servirá para ordenar un array
//* este método retorna el array ordenado. // ["azul", "magenta", "naranja", "rojo", "verde"]
//* este método puede recibir una función que recoja dos de los elementos que está comprobando en ese momento en concreto y podemos hacer en esa función alguna operación para ordenarlos de manera más manual.

console.log(colores.sort());

console.log(colores);

console.log(numeros.sort((a, b) => {
    return a - b
}));

console.log(numeros);