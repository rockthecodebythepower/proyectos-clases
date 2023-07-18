//* todo método menos el .length -> llevará los paréntesis al final.   array.metodo();
                                                                    //? parámetros van dentro del paréntesis


const nombres = ["Alicia", "Clara", "Jose María", "Carlos"];

console.log(nombres);

//! pop -> el método pop ELIMINARÁ la última posición de un array -> no lleva parámetros -> este método MODIFICA el array original.
// el método pop retorna el elemento que ha eliminado
console.log(nombres.pop());

console.log(nombres);


//! push -> el método push AÑADIRÁ uno o varios elementos que sean indicados en los parámetros separados por comas al FINAL del array -> en los parámetros podemos poner tantos elementos como queramos separados por comas -> este método MODIFICA el array original
// el método push retorna la nueva longitud del array después de haber metido los elementos
console.log(nombres.push("Carlos", "Eric"));

console.log(nombres);


//! shift -> el método shift ELIMINARÁ la primera posición de un array -> no lleva parámetros -> este método MODIFICA el array original.
// el método shift retorna el elemento que ha eliminado
console.log(nombres.shift());

console.log(nombres);


//! unshift -> el método unshift añadirá uno o varios elementos al COMIENZO de un array separados por comas -> este MODIFICA el array original
// el método unshift retorna la nueva longitud del array después de haber metido los elementos
console.log(nombres.unshift("Alicia", "Alejandro"));

console.log(nombres);


//! slice -> el método slice devolverá un trozo del array de la posición que queramos a la posición que queramos -> este método NO MODIFICA el array -> los parámetros deben ser dos, el primero, es DESDE donde empezamos a coger este incluido, el segundo parámetro es HASTA donde cogemos del array este no incluido.
// el método slice retorna el cacho de array que has seleccionado
console.log(nombres.slice(2, 5));

console.log(nombres);


//! splice -> el método splice se parece bastante a el slice, una de sus grandes variaciones es que este SI MOFIDICA el array original, además en los parámetros, va a funionar parecido, pero este a partir del tercer parámetro puede recibir tantos parámetros como sean y todos se van a añadir en el trozo que hayamos quitado del array.
// el splice retorna el contenido eliminado
console.log(nombres.splice(3, 2, "Rocío", "Jeniffer"));

console.log(nombres);


//! reverse -> el método reverse simplemente invierte el array por completo -> MODIFICA el array original
// el reverse retorna el array invertido
nombres.reverse();

console.log(nombres);


//! join -> el método join creará un string a partir de los elementos del array, lo hará mediante el separador que pongamos entre los paréntesis -> NO MODIFICA el array original.
// el join retorna el string generado mediante los parámetros indicados
console.log(nombres.join("-"));

console.log(nombres);


//! indexOf -> es un método que NO MODIFICA el array y me sirve para saber la posición o índice de un elemento dentro de mi array 
// este método retorna el índice del PRIMER elemento en el array si lo encuentra y si no lo encuentra retornará -1
nombres.push("Jeniffer")

console.log(nombres.indexOf("Jeniffer"));

console.log(nombres);


//! lastIndexOf -> es lo mismo que el indexOf pero me devolverá el último
// este método retorna el índice del ÚLTIMO elemento en el array si lo encuentra y si no lo encuentra retornará -1
console.log(nombres.lastIndexOf("Jeniffer"));

console.log(nombres);


//! includes -> es un método que NO MODIFICA el array original y nos sirve para saber si un elemento está dentro del array o no;
// este método retorna un valor booleano con la respuesta
console.log(nombres.includes("Rocío"));
console.log(nombres.includes("Oscar"));

console.log(nombres);