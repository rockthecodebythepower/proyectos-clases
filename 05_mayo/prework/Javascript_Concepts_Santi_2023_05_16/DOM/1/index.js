//! SELECTORES -> cuando necesito un elemento de HTML en nuestro JS (para cambiar algo del mismo);
const myH1$$ = document.querySelector("h1");

let numero = 8;

numero; //? variable de JS

myH1$$; //? variable de JS que contiene algo de HTML

//! MODIFICADORES -> cuando necesito CAMBIAR algo de alguna variable de mi HTML
setTimeout(() => {
  myH1$$.textContent = "Hola mundo";
  myH1$$.className = "esta es mi clase";
  myH1$$.style.color = "red";
}, 3000);

//! ELIMINAR ELEMENTOS
setTimeout(() => {
  myH1$$.remove();
}, 6000);

//! meter 6 li dentro del ul

//? seleccionar el ul
const lista$$ = document.getElementById("lista");

const noticias = ["Pepito", "Pepazo", "Pepe", "Pepin"]

/* for (let i = 0; i < 6; i++) {

  //* CREAR el li                   etiqueta
  const li$$ = document.createElement("li");

  li$$.innerText = "pepito" + i;

  //* meter el li en el ul
  lista$$.appendChild(li$$);

} */

for (const noticia of noticias) {
    
    //* CREAR el li                 etiqueta
  const li$$ = document.createElement("li");

  li$$.innerHTML = noticia;

  //! meter el li en el ul
  lista$$.appendChild(li$$);

}
