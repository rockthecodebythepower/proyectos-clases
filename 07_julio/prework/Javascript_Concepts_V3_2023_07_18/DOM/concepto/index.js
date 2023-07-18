//! DOM -> DOCUMENT OBJECT MODEL
// un modelo creado sobre el documento de html que lo gestiona como si fuese un objeto de javascript

//! SELECTORES -> similar a css, si quiero hacer algo con algún elemento primero necesito el elemento

//? querySelector  // clase .  // id  #  // etiqueta p  -  la misma regla que en css

// creamos variables para guardar cosas de html como objetos en javascript
const body$$ = document.querySelector("body");

const button$$ = document.querySelector("button");

button$$.style.color = "white"

setInterval(() => {
    button$$.style.backgroundColor = button$$.style.backgroundColor === "red" ? "blue" : "red"
}, 500);

// getElementById -> si el elemento que quiero seleccionar no tiene id no puedo seleccionarlo con esto, getElementById - únicamente selecciona los elementos del DOM mediante su ID

// getElementsByClassName -> seleccionar TODOS los elementos que compartan la clase que indiquemos, que si solo hay uno será un array de uno. Siempre me va a devolver un array

//document.querySelectorAll("p") // lo mismo que querySelector pero con todos es decir me devuelve un array de nodos que cumplan las opciones que hayamos puesto


//? para poder modificular un elemento es necesario tenerlo previamente seleccionado;

button$$.textContent = "Pepito grillo";

button$$.style.borderRadius = "20px";

button$$.style.border = "none";

console.log(button$$);

setTimeout(() => {
    button$$.innerHTML = "Cambio con innerHTMl"
}, 1000);

setTimeout(() => {
    button$$.innerText = "Cambio con innerText"
}, 2000);

// tengo un problema  ->  tengo que solucionarlo

// si yo quiero cambiar una clase puedo utilizar className peeeero tengo que tener MUY en cuenta que si utilizo className voy a estar sobreescribiendo la o las anteriores clases que hubiese
/* button$$.className = "pepito problemita" */

const imgMenu$$ = document.querySelector(".img-menu");

const toggleMenu = () => {

    const menu$$ = document.querySelector(".menu");

    // conocimiento de la teoría
    menu$$.classList.toggle("open");

    // uso de la lógica
    /* if (menu$$.className.includes("open")) {
        menu$$.classList.remove("open");
    } else {
        menu$$.classList.add("open");
    } */

}

imgMenu$$.addEventListener("click", toggleMenu);


//! Creación de elementos
const variable = document.createElement("p");

document.body.appendChild(variable);