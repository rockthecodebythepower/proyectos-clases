//! PALABRAS RESERVADAS
// javascript es un lenguaje de alto nivel
// let
// const
// var -> declarar variables

// for -> bucles
// function -> funciones
// return -> salir de las funciones
// break -> salir de los bucles
// if -> comprobar
// else -> comprobar
// try
// async
// await
// catch

//! Variables y tipos de datos
// Una caja que contiene algo
// Almacenar información / datos para usarla después
// Sostenibilidad del código

// RANDOM ACCES MEMORY -> memoria de uso temporal

// Lenguaje de tipado débil -> no tengo por qué indicar el tipo de mis datos.
//? Infiere los tipos de los datos que le ponemos a las variables

let nombre = `Diego`; // String -> Cadena de texto
let edad = 30; // Number -> Numero
let vivo = true; //

let variableCompleja = ["Diego", "Javier", "Francisco", "Juanito"];
let variableCompleja2 = {
  vista: true,
  aslkdf: false,
  ldslaf: "sldfs",
};

//! Condicionales
// una manera de comprobar x datos o x sentencias
if (edad < 18) {
} else {
}

//! Bucles
// realizar una acción, repetidas veces - cuantas: x - lo que queramos
for (let i = 0; i < 5; i++) {
  console.log("Estoy en el bucle");
}
// declara una variable numérica que empieza con valor 0
// SIEMPRE y cuando la variable i sea MENOR que 5, entonces, seguiré ejecutando el código que tenga entre las llaves
// i++, al final del bucle se suma 1 a la variable 1

//! Funciones -> reutilización de código
function saludar () {
    let i = 239832;
    console.log("ESTOY DENTRO DE LA FUNCIÓN");
}

saludar();

//! métodos
console.log(variableCompleja.filter((el) => el.includes("e")));

const arrayResultante = [];

for (let i = 0; i < variableCompleja.length; i++) {
    
    for (let j = 0; j < variableCompleja[i].length; j++) {
        
        if (variableCompleja[i][j] === "e") {
            arrayResultante[arrayResultante.length] = variableCompleja[i];
            break;
        }
        
    }
    
}

console.log(arrayResultante);

// filtrar nuestro listado de elementos para quedarme únicamente con los strings que incluyan la letra e