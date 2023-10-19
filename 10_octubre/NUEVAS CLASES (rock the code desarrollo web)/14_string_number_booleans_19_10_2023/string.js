// TIPO DE DATO ITERABLE

let importante = "IMPÑO"; // 5
// posiciones     01234

/* console.log("esto es la longitud:", importante.length); */ // 7

/* console.log(importante[importante.length - 1]); */


//! MÉTODOS MUY IMPORTANTE - sustituibles por código vuestro propio
//? Los métodos casi siempre devuelven algo -> yo puedo ejecutar cierto método para hacer cierta cosa en concreto y ese método me va a "contestar"
//* .includes("Z") -> devuelve true o false
//* .length -> devuelve un número
//? muchos métodos recibirán parámetros indicándoles lo que tienen que hacer o con qué cosas tienen que jugar

console.log(importante.includes("O"));
/* console.log(importante.includes("O" && "Z")); */

console.log(importante.slice(importante.length - 3, importante.length)); // devuelve un nuevo string con lo extraido del anterior