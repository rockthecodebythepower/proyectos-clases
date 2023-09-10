//! LOS ARRAYS / matriz / arreglo 

//? son literalmente un listado de elementos
//? es una variable ITERABLE -> algo que se puede recorrer.

//* un nombre "Marcela" -> puedo mirar letra por letra -> un string SI es un tipo de dato iterable

//* un número 2349 -> js no me permite mirar cada número de uno en uno -> un número no es un tipo de dato iterable


//? LA CONDICIÓN PARA QUE UN ELEMENTO SEA ITERABLE ES QUE TENGA POSICIONES Y PUEDA ACCEDER A CADA UNA DE ELLAS;

// "Marcela" -> longitud 7
//  0123456

// tenemos dos tipos de datos iterables
// string y array;

const comidas = ["galletas", "pizza", "donuts", "hamborguesa"];
//                   0          1         2            3

// que es un método de arrays?

// un método es una funcionalidad que podría hacer perfectamente en nativo pero que ha creado otra persona para ahorrarme tiempo programando

// durante todo el uso de js muchas personas han reportado que necesitan muchas veces hacer lo mismo ("buscar el índice de un elemento dentro de un array");

// los desarrolladores de javascript crearon el método indexOf();

/* console.log(comidas.indexOf("hamborguesa")); */

console.log("la posición de mi elemento es: " + comidas.indexOf("pizza"));