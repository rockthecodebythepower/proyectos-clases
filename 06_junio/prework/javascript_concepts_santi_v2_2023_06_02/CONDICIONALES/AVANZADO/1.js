const quokka = {
    nombre: "Julita",
    edad: 3,
    crias: false
}

//! quiero que me hagáis una condición que si el nombre de mi quokka es julita me salga un console.log de hola julita.

//? condicional normal
if (quokka.nombre === "Julita") {
    console.log("Hola Julita");
}

//? ternario
quokka.nombre === "Julita" ? console.log("Hola Julita") : null

//? switch
switch (quokka.nombre) {
    case "pepin":
        console.log("Hola Pepin");
        break;
    case "Julita": 
        console.log("Hola Julita");
        break;
    default:
        break;
}

//? OBJETO -> una comprobación de muchos valores simples
const comprobacion = {
    Julita: "Hola Julita",
    Pepin: "Hola Pepin",
    Hola: "Hola Hola"
}

console.log(comprobacion[quokka.nombre] || "No encontrado");


let bgColor = "orange";

const colores = {
    blue: "white",
    red: "white",
    orange: "black",
    pink: "white"
}

console.log(colores[bgColor]);