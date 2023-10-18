// let me permite reasignar el valor de una variable
// const no

const tamagotchi = {
    nombre: "Juanillo",
    hambre: 50,
    felicidad: 20,
    cansancio: 40,
    suciedad: 30
}

const tamagotchi2 = {
    nombre: "Daria",
    hambre: 20,
    felicidad: 60,
    cansancio: 50,
    suciedad: 10
}

//! DECLARACIÓN DE LA FUNCIÓN
        // (argumento)
function eat (tama) {
    console.log(tama);
    if (tama.hambre <= 10) {
        console.log(tama.nombre + " no tiene hambre.");
    } else {
        tama.hambre -= 20;
        console.log("ñam ñam...");
        // concatenando texto con variables
        console.log(`ahora ${tama.nombre} tiene ${tama.hambre} de hambre`);
    }
}

//! LA EJECUCIÓN DE LA FUNCIÓN
eat(tamagotchi);
console.log("-----------------------");
//  (parámetro)
eat(tamagotchi);
console.log("-----------------------");
eat(tamagotchi2);

// nuestro código va de línea 1 a 9, y de 12 hasta la 16, vuelve a la 9 y ejecuta hasta el final de la función que es la línea 12, a continuación sigue por donde lo dejamos que en este caso es la línea 16