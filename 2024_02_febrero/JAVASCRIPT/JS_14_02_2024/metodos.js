//! LOS MÉTODOS NO HACEN NADA NUEVO

/* const array = ["primer"]; // 1
//                0

let palabra = "Paquito";

array[0] = palabra; */

/* array.splice(array.length, 1, "nueva cosa");

array.push("más fácil"); */

/* console.log(array); */

const arrayDatos = ["primero", "segundo", "tercero", "cuarto"];

// el método find sirve para encontrar el primer elemento de tu array que coincida con la condición introducida

// el método filter sirve para generar un array de elementos que cumplan con la condición aportada

/* console.log(array.find((elemento) => elemento.includes("t")));

console.log(array.filter((elemento) => elemento.includes("t"))); */

const filterSanti = (array, funcion) => {
    const arrayResultante = [];
    for (const elemento of array) {
        if (funcion(elemento)) {
            arrayResultante.push(elemento)
        }
    }
    return arrayResultante
}

console.log(filterSanti(arrayDatos, (el) => el.includes("t")));

// java
// javascript
// c++
// unreal engine
// php
// python