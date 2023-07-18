console.log("red");

//! que puede hacer javascript sin un html en front? NADA console.logs...

//? Seleccionado un elemento del html dentro de mi JS -> lo he podido hacer gracias al DOM

//* DOM -> DOCUMENT OBJECT MODEL -> un modelo de interpretar el documento html como si fuese un objeto de javascript

//* los tipos de datos que conoce javascript y con los que puede funcionar son estos: 
//! numeros
//! booleanos
//! string
//! "arrays"
//! objects

// como entiende esto javascript? -> <h1>hola mundo</h1> -> HTML -> hypertext markup language -> lenguaje de marcado -> funciona mediante etiquetas de apertura y cierre con contenido dentro

//? 💡 -> vamos a convertir este h1 en un objeto para que javascript lo pueda comprender y manejar

console.log(document.querySelector("h1"));

// esto me devuelve un objeto de javascript donde yo puedo manipular sus propiedades a mi antojo, al manipular las propiedades estoy consiguiendo que cambie mi elemento de forma sinmultánea en mi página visualmente

/* document.querySelector("img").addEventListener("click", () => document.querySelector(".menu").classList.toggle("open")); */

//? CREATE -> NECESITO PODER CREAR COSAS MEDIANTE JAVASCRIPT EN MI HTML QUE NO EXISTÍAN PREVIAMENTE

// TAREA: quiero crear un párrafo mediante javascript darle el contenido "esto es un párrafo" y por último insertarlo dentro del body

// C creación del nodo p -> document.createElement("nombreEtiqueta")
const miParrafo = document.createElement("p");

// U actualizar mi párrafo que no tenía contenido de texto y poníendoselo
miParrafo.textContent = "esto ya no es un párrafo";
miParrafo.className = "pepito"

// C inserción en el html ¿donde quiero poner el párrafo que acabo de crear?
document.body.appendChild(miParrafo);
// donde lo quiero meter   .   appendChild   (lo que quiero meter)


//? READ -> NECESITO PODER SELECCIONAR LO QUE QUIERO CAMBIAR DE MI HTML
//? UPDATE -> NECESITO PODER MODIFICAR LOS ELEMENTOS QUE HE CREADO O SELECCIONADO A MI ANTOJO
//? DELETE -> NECESITO PODER ELIMINAR LOS ELEMENTOS DEL HTML A MI ANTOJO


// TAREA: crear un botón que me permita que cada vez que yo haga click me cambie la imagen por otra;
const button = document.querySelector("#change-image");
const img = document.querySelector("#random-image");

const changeImage = () => {
    if (img.src === "https://picsum.photos/200/300") {
        img.src = "https://us.123rf.com/450wm/vectorv/vectorv1911/vectorv191124508/134172289-icono-de-interfaz-api-de-computadora-verde-aislado-sobre-fondo-azul-interfaz-de-programaci%C3%B3n-de.jpg?ver=6";
    } else {
        img.src = "https://picsum.photos/200/300"
    }
    
}

button.addEventListener("click", changeImage);

// donde escucho el evento    .    addEventListener   ("evento"   ,   funcion) -> a esta función de manera implícita le va a llegar el evento que se ha realizado, por si lo necesitamos
document.body.addEventListener("keydown", (event) => console.log(event));