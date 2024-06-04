//! CRUD - CREATE - READ - UPDATE - DELETE
//! DOM - DOCUMENT - OBJECT - MODEL

//? READ - darles una funcionalidad - modificarlos - x
const button = document.querySelector("button.seleccionar");
const seleccionados = document.querySelectorAll(".seleccionar");

//* querySelector - permite seleccionar EL PRIMER ELEMENTO que coincida con el selector de css aportado

// querySelector - selectores de css
// querySelectorAll - selectores de css


//? UPDATE - puedo modificar todas las propiedades del elemento que quiera

setInterval(() => {
    /* button.style.position = "absolute";

    button.style.top = `${Math.random() * 500}px`;
    button.style.left = `${Math.random() * 1000}px`; */

    /* if (button.textContent === "Registrarse") {
        button.textContent = "Login";
    } else {
        button.textContent = "Registrarse"
    } */
}, 500);



//? CREATE - puedo crear cualquier elemento
const div = document.querySelector("div.seleccionar");
const a = document.createElement("a");
div.append(a);

const addElement = () => {
    a.textContent = `Aleatorio: ${Math.floor(Math.random() * 1000)}`
}
// Inyectar HTML

// Utilizar DOM para crear los elementos e insertarlos donde queramos


// cuando haga click en el botón se va a ejecutar una función llamada addElement
button.addEventListener("click", addElement);


//? DELETE - puedo eliminar cualquier elemento
setTimeout(() => {
    button.remove();

    const button2 = document.querySelector("button.seleccionar");

    console.log(button2);
}, 10000);


// explota - Eduard
// null - Aurora
// elementNotFound
// -1

