//! Normalmente un bucle SUELE (no siempre) ir de la mano de un array 
//? RECORRER UN ARRAY
//* -> recorrer un array significa acceder a cada una de las posiciones que ese array tiene para hacer algo con CADA elemento del array

const juegos = ["zelda", "minecraft", "rocket league", "the last of us"];
//! posiciones     0          1              2                 3


//? for (declaración variable; condición; iterador)

for (let numero = 0; numero < 5; numero++) {
    console.log(numero);
}



//! VARIABLES Y TIPOS DE DATOS, CONDICIONALES, BUCLES
//* CASI CUALQUIER EJERCICIO DE JAVASCRIPT SIN HTML PUEDO RESOLVERLO CON ESTOS 3 PILARES FUNDAMENTALES

/* let comidas = juegos.map((juego) => "naranja");

console.log(comidas); */

let comidas = [];

//!                        4
for (let i = 0; i < juegos.length; i++) {
    
    comidas[i] = "naranja";
    
}

console.log(comidas);


//! voy a filtrar mi array de juegos y me voy a quedar sólo con los juegos que tengan más de 6 letras en su nombre

//? creo la variable con la que voy a guardar los juegos filtrados
//let juegosFiltrados = [];

//? creo un bucle que de tantas vueltas como juegos tenga en mi array, en este caso 4 -> 0, 1, 2, 3
/* for (let i = 0; i < juegos.length; i++) {
    
    if (juegos[i].length > 10) {

        /* juegosFiltrados[juegosFiltrados.length] = juegos[i]; 
        juegosFiltrados.push(juegos[i]);

    }
    
} */

let juegosFiltrados = juegos.filter((juego) => juego.length > 10);

console.log(juegosFiltrados);