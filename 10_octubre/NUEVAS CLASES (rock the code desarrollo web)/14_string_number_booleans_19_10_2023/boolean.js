//* true / false

let alumnoDelMes = "Kevin"; // 5
// posiciones       01234

let otraPalabra = "laskdflks"

console.log(alumnoDelMes.includes("e")); // true
console.log(otraPalabra.includes("a")); // true

//* Declaración
function includes (palabra, pregunta) {
    let incluye = false;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === pregunta) {
            incluye = true;
        }
    }
    
    return incluye
}

//! llamo a la función
console.log(includes(alumnoDelMes, "e")); // true
console.log(includes(otraPalabra, "a")); // true