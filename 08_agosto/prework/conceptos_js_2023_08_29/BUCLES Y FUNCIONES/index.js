//? BUCLES -> una sentencia donde puedes meter código dentro y este será ejecutado tantas veces como el bucle indique
//! NO INTENTÉIS APRENDER TODOS LOS BUCLES A LA PRIMERA
// for - forof - foreach -> HACEN EXACTAMENTE LO MISMO

//? FUNCIONES -> MUY IMPORTANTE -> dentro de una función pondré un código - la función la puedo guardar en memoria - mi programa recuerda que existe una función con el nombre que yo le haya dado - cuando yo quiera ejecutar la parte de código que he metido dentro de la función únicamente tendré que (ejecutar o invocar o llamar) la función.

/* .length -> la longitud de mi Array; */

// yo tengo una cadena de producción donde me llega una camiseta, un nombre de un cliente y mis máquinas ponen el nombre en la camiseta
// guardo los nombres de mis clientes en un array y necesito contar sin utilizar el .length, cuantos clientes tengo para un estudio

const clientes = ["Vicente", "Marcela", "Rocío", "Alicia", "Clara"];
const clientes2 = ["Gabriel", "Jorge", "Jose María", "Mariana", "Nadia", "Roman"];
const clientes3 = ["Victor", "Santi"];

// si yo tengo un código que necesito escribir varias veces, optaré por meterlo dentro de una función para reutilzarlo, como lo voy a reutilizar? tendré que identificar que cambia en mi código por cada vez que ejecuto la función en este caso en concreto unas veces quería que recorriese el array clientes, otras veces, clientes2, otras veces clientes3 y así sucesivamente -> crear una función que RECIBA un array y a mi código le da igual que array sea, que siempre le va a llamar de la misma manera y siempre va a hacer lo mismo

//* FUNCIÓN
// () -> los parámetros de la función - MÁS IMPORTANTE DE ENTENDER DE UNA FUNCIÓN
// {} -> el código que da funcionalidad a la función
function contarClientes(array) {
    let cont = 0;

    console.log(array)

    //* BUCLE
    // () -> configuración del bucle -> desde donde empieza, hasta donde va y de cuanto en cuanto suma
    // {} -> código que queramos que se repita una y otra vez
    for (let i = 0; i < array.length; i++) {
        cont++;
    }

    console.log("tengo " + cont + " clientes");
}

contarClientes(clientes);
contarClientes(clientes2);
contarClientes(clientes3);