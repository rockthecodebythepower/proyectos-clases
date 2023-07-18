//! boolean -> true / false; -> es como un interruptor encendido / apagado; 1 / 0
//! number -> son números, los números van sin comillas y puede ser cualquier número.
//! string -> son CADENAS DE CARACTERES -> van con comillas (" " ' ' ` `);
//! object -> se guardan en memoria de una manera especial -> son variables complejas que detallaremos más en el futuro
//? Array (object) -> un array NO es un tipo de dato de javascript -> es un objeto que se trata de una manera especial para aportarnos un listado de elementos
//! null -> no tiene valor
//! undefined -> no está definido


//* SIMPLES -> variables que se van a guardar en memoria con su clave y su valor
// boolean
// number
// string


//* COMPLEJOS -> variables que se van a guardar en memoria con un punto de referencia de la misma -> persona = 32983469873452;
// array (object)
// object
// null
// undefined


//? javascript es un lenguaje de programación que te permite declarar una variable sin indicar de qué tipo es esa variable, al declararla si es un número automáticamente esa variable pasará a ser de tipo numérico


//! LOS TIPOS DE DATOS SON SÚPER IMPORTANTES TENERLOS CLAROS PORQUE DEPENDIENDO DE CON QUÉ TIPOS DE DATOS ESTÉS JUGANDO LOS VAS A TRATAR DE UNA MANERA O DE OTRA, EL CÓDIGO TAMBIÉN LOS TRATA DE UNA MANERA DIFERENTE DEPENDIENDO DEL TIPO DE DATO QUE SEA


//! comprobaciones curiosas


//? strings -> cadenas de caracteres

let nombre1 = "Pepe";
let nombre2 = "Luis";

console.log(nombre1 + " " + nombre2);

//? en el ejemplo de arriba el operador + me está sirviendo como concatenador de texto, es decir está juntando los texto que pongo


//? number -> números

let numero1 = 5;
let numero2 = 8;

console.log(numero1 + numero2);

//? en el ejemplo de arriba el operador + me está sirviendo para sumar números

//! el operador + depende su funcionamiento de el TIPO DE DATO que estemos usando.

// string
let numero3 = "76";

// number
let numero4 = 34;

console.log(numero3 + numero4);

let numero5 = "1";
let numero6 = 1;
let numero7 = 1;

console.log(numero6 + numero7 + numero5);

console.log(numero5 + numero6 + numero7);