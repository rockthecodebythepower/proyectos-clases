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


//! ARRAYS

//* array -> lista de elementos -> siempre irán con [] y serán un listado de elementos los cuales me da absolutamente igual que tipo de dato sean.

const listaDeLaCompra = ["naranjas", "lechuga", "nocilla", "queso", "aguacate", "platanos", "mangos"];
//! POSICIONES               0           1          2         3          4           5          6

//! metodos de array

//? listaDeLaCompra.pop(); -> Elimina el último elemento del array;
//? listaDeLaCompra.push("peras"); -> Añadir un elemento al final del array -> añadiendo peras al final
//? listaDeLaCompra.splice(1, 1, "peras"), puede tener 3 parámetros, necesita mínimo 1, el primer parámetro es desde donde me pongo a cortar con mi tijera (posición), el segundo parámetro es cuantos (cantidad) elementos de ahí a la derecha tengo que cortar con mi tijera, de ahí en adelante todos los parámetros que pongamos serán los elementos que haya en mi array en esas posiciones que hemos cortado
//? listaDeLaCompra.includes("naranjas") -> pregunta si el array incluye "naranjas" -> de ser así devuelve un true y de no ser así devuelve un false; 

//! un array y string se parecen en que ambos son tipos de datos ITERABLES

//! SPLICE
//* Parametro1 -> donde pongo mi tijera;
//* Parametro2 -> cuantos corto;
//* Parametro3 -> el o los elementos que van en ese lugar;

console.log(listaDeLaCompra);

console.log(listaDeLaCompra.join(" "));

console.log(listaDeLaCompra[listaDeLaCompra.length - 1]);

const ultimo = listaDeLaCompra.length - 1;

console.log(listaDeLaCompra[ultimo]);

console.log(nombre.length);


//! OBJETOS

//* un objeto es un tipo de dato complejo que tiene propiedades con clave: valor

const variable = "nombre";

const objeto = {
    nombre: "pepe",
    edad: 34,
    colega: {
        nombre: "pepito",
        edad: 45
    }
}

objeto.edad = 50;

console.log(objeto[variable]);
console.log(objeto.variable);