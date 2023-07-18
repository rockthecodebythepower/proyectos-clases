//? necesito seleccionar el botón de mi página ✅, escuchar el evento click para que cuando me hagan click voy a ejecutar una función que debo crear previamente que lo que haga sea crear un párrafo e introducirlo en el body 

// queryselector SIEMPRE selecciona el primero que se encuentre con esas características
const button$$ = document.querySelector("button");
const textarea$$ = document.querySelector("textarea");

const crearParrafo = () => {

    /* const allParagraphs = document.querySelectorAll("p"); */

    const paragraph = document.createElement("p");

    /* paragraph.innerText = `soy el párrafo ${allParagraphs.length + 1}`; */
    paragraph.innerHTML = textarea$$.value;

    textarea$$.value = "";

    textarea$$.focus();

    // donde lo quiero meter . appendChild (lo que quiero meter)
    document.body.appendChild(paragraph);

}

button$$.addEventListener("click", crearParrafo);