//! CRUD -> siglas -> CREATE READ UPDATE DELETE

//? CREATE -> crear información en el DOM
//? READ -> leer información del DOM
//? UPDATE -> actualizar la información
//? DELETE -> eliminar esa información


//! DOM -> DOCUMENT OBJECT MODEL

//? String
//? Number
//? Object
//? Boolean
//? Array

// array no es un tipo de dato como tal
/* console.log(typeof []); */

//! hay muchísimos métodos en DOM, muchos harán lo mismo o prácticamente lo mismo

//? READ
// nos apoyamos en el documento para buscar y leer alguna cosa

// busque el h1 de mi HTML y lo muestre por consola
/* const myH1 = document.querySelector("h1");

console.log(myH1); */

//? MÉTODOS READ

//* getElementsByTagName selecciona del DOM TODOS los elementos que cumplan con el nombre de etiqueta aportado -> devuelve un array de nodos (HTMLCollection)
console.log("getElementsByTagName", document.getElementsByTagName("h1"));

//* getElementById selecciona el Nodo de nuestro HTML por id
console.log("getElementById", document.getElementById("alumnoDelMes"));

//* getElementsByClassName traer TODOS los elementos que tengan la clase aprobado
console.log("getElementsByClassName", document.getElementsByClassName("aprobado"));

//* querySelector selecciono UN único elemento por la condición que le indique (primero)
console.log("querySelector por etiqueta", document.querySelector("h1"));
console.log("querySelector por id", document.querySelector("#alumnoDelMes"));
console.log("querySelector por clase", document.querySelector(".aprobado"));
console.log("querySelector por clase", document.querySelector("p.aprobado"));
console.log("querySelector por clase", document.querySelector("p.aprobado > span.nota"));

//* querySelector selecciono UN único elemento por la condición que le indique (primero)
console.log("querySelectorAll por etiqueta", document.querySelectorAll("h1"));
console.log("querySelectorAll por id", document.querySelectorAll("#alumnoDelMes"));
console.log("querySelectorAll por clase", document.querySelectorAll(".aprobado"));
console.log("querySelectorAll por clase", document.querySelectorAll("p.aprobado"));
console.log("querySelectorAll por clase", document.querySelectorAll("p.aprobado > span.nota"));



//? UPDATE
// para actualizar no hay 5 métodos o 10 métodos
// voy a poder actualizar todo tipo de cosas en mis elementos de HTML

// READ
const allMyAlumns = document.querySelectorAll("p"); // array

for (const alumn of allMyAlumns) {
    if (parseInt(alumn.firstChild.nextSibling.textContent) >= 5) {
        alumn.className = "aprobado";
    } else {
        alumn.className = "suspendido";
    }
}

// UPDATE
/* setInterval(() => {
    for (const aprobado of allMyAlumns) {
        aprobado.style.color = "red";
        aprobado.style.fontSize = "40px";
        aprobado.classList.toggle("aprobado");
        if (aprobado.className === "suspendido") {
            aprobado.className = "aprobado";
        } else {
            aprobado.className = "suspendido";
        }

        if (aprobado.textContent === "aprobado") {
            aprobado.textContent = "suspenso";
        } else {
            aprobado.textContent = "aprobado";
        }
    }
}, 1000); */