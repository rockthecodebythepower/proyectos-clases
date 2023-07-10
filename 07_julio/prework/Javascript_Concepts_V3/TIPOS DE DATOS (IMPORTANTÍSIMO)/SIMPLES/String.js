//! ES UN TIPO DE DATO ITERABLE 

//? ITERABLE es un tipo de dato que se puede recorrer o iterar, es decir, tiene posiciones y puede utilizar muchos de los métodos que tienen los arrays (iterables)

//! cuando hablamos de posiciones en un string o en un array estas empezarán desde la posición 0
let nombre = "Pepe";
            //0123

// let nombre = new String("Luis");

console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);
console.log(nombre[3]);

console.log(nombre.includes("e"));

console.log(nombre + " ha cumplido 23 años");
console.log(nombre, "ha cumplido 23 años"); // los strings también se pueden concatenar con la , cuando hablamos de un console.log
console.log(`${nombre} ha cumplido 23 años`); // las comillas francesas me permiten poner variables y texto en el mismo console.log


let numero = 23452; // un número NO es un tipo de dato iterable.

console.log(numero.includes(4)); //! ERROR