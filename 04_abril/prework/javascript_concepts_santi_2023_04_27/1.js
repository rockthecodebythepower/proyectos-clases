//! TIPOS DE DATOS

//? DECLARAR UNA VARIABLE -> LET O CONST SEGUIDO DEL NOMBRE QUE LE QUEREMOS DAR A ESA VARIABLE Y SEGUIDO CON UN = DEL VALOR DE ESA VARIABLE -> GUARDANDO EN SU MEMORIA ESA VARIABLE CON ESE VALOR
//* string -> cadena de texto -> todas las cadenas de texto llevan comillas
const nombre = "Alejandro";
const apellido = 'Sánchez';

console.log(typeof nombre);

//* number -> numero -> todos los números irán sin comillas
const numero = 4;

/* console.log(`Buenos días` + " " + nombre + ' ' + apellido);

console.log(numero + 5);

console.log(numero + 5 + "3"); */

console.log(typeof numero);


//* boolean -> true / false -> nos servirán normalmente para hacer comprobaciones

const encendido = false;

console.log(typeof encendido);


//* array -> lista de elementos -> siempre irán con [] y serán un listado de elementos los cuales me da absolutamente igual que tipo de dato sean.

const listaDeLaCompra = ["naranjas", "lechuga", "nocilla", "queso", "aguacate", "platanos", "mangos"];
//! POSICIONES               0           1          2         3          4           5          6

//! metodos de array
/* listaDeLaCompra.pop(); */

console.log(listaDeLaCompra.join(" "));

console.log(listaDeLaCompra[listaDeLaCompra.length - 1]);

const ultimo = listaDeLaCompra.length - 1;

console.log(listaDeLaCompra[ultimo]);

console.log(nombre.length);
//! IGUALES
//* = -> asignación
//* == -> comparación
//* === -> comparación estricta