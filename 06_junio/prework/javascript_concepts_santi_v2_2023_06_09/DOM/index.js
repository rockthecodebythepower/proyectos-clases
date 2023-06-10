//! DOM - DOCUMENT OBJECT MODEL

//* SELECCIONAR / ACCEDER A ELEMENTOS DEL DOM EN JAVASCRIPT

const myH1$$ = document.querySelector("h1"); //! <h1>Hola mundo</h1>

//? const myH1$$ = document.getElementById("idH1") //<h1>Hola mundo</h1>

//? const myH1$$ = document.getElementsByClassName("titulo") // [<h1>Hola mundo</h1>]

//? const myH1$$ = document.getElementsByTagName("h1") // [<h1>Hola mundo</h1>]

//? const myH1$$ = document.querySelector("h1") // selector por etiqueta

//? const myH1$$ = document.querySelector(".titulo") // selector por clase

//? const myH1$$ = document.querySelector("#idH1") // selector por id

//? document.querySelectorAll("") // EXACTAMENTE EL MISMO USO QUE QUERYSELECTOR PERO DEVUELVE UN ARRAY

//! recomiendo usar querySelector siempre;

//* CAMBIAR O MODIFICAR LOS ELEMENTOS DEL DOM EN JAVASCRIPT

//? myH1$$.textContent = "Adios mundo";
//! elemento.textContent = "lo que sea"; esto cambia el contenido de texto de un elemento;
//? myH1$$.innerText = "Adios mundo";
//? myH1$$.innerHTML = "Adios mundo";

//! cambiar contenido de texto
myH1$$.textContent = "Adios mundo";

//! cambiar clases

//? className

myH1$$.className = "pepito"; //? sobreescribir la clase que ya existía

//? classList

// add
myH1$$.classList.add("Juanito");
myH1$$.classList.add("silvia");

// remove
myH1$$.classList.remove("Juanito");

//! cambiar estilos en LÍNEA
myH1$$.style.color = "red";

//! mini ejercicio de cambiar el src de la imagen
const img$$ = document.querySelector("img");



//* EVENTOS - OCURREN POR LA PÁGINA CONTINUAMENTE PERO NO LOS ESTAMOS CONTROLANDO

//? queremos que cuando haga click en la imagen esta cambie su src al del coche.

function cambiarImagen() {

  if (img$$.src === "http://127.0.0.1:5500/assets/lavado-de-autos.png") {

    img$$.src = "./assets/lavado-a-presion.png";

  } else {

    img$$.src = "./assets/lavado-de-autos.png";

  }
}

img$$.addEventListener("click", cambiarImagen);


function cambiarColorh1 () {
    myH1$$.style.color = "blue"
}

function cambiarColorh12 () {
    myH1$$.style.color = "yellow"
}

myH1$$.addEventListener("mouseover", cambiarColorh1);
myH1$$.addEventListener("mouseleave", cambiarColorh12)


//* CREACIÓN DE ELEMENTOS DINÁMICAMENTE EN MI PÁGINA.

const myP$$ = document.createElement("p");
const myDiv$$ = document.querySelector(".aqui-va-mi-parrafo");

myP$$.textContent = "soy un párrafo y me han metido desde javascript"

myDiv$$.appendChild(myP$$);