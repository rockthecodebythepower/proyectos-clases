//! LOS MÁS ÚTILES QUERYSELECTOR Y QUERYSELECTORALL

//? 1
//                      -> querySelector selecciona el primer elemento que cumpla con el requisito
const primerDiv = document.querySelector("div");

primerDiv.style.backgroundColor = "orange";


//? 2
//                       -> querySelector puede seleccionar un elemento mediante su clase con el . delante
const segundoDiv = document.querySelector(".small");

segundoDiv.style.backgroundColor = "orange";


//? 3 
//                      -> querySelector puede seleccionar un elemento mediante su id con el # delante
const tercerDiv = document.querySelector("#unico");

tercerDiv.style.backgroundColor = "orange";


//? 4
//            -> querySelector puede seleccionar un elemento mediante su atributo elemento[atributo='valor']
const cuartoDiv = document.querySelector("div[name='nombre']");

cuartoDiv.style.backgroundColor = "orange";


//! sin utilizar querySelector

//  getElementsByTagName  ->  seleccionar VARIOS elementos por su nombre de etiqueta
const primerDiv$$ = document.getElementsByTagName("div")[0];

primerDiv$$.style.backgroundColor = "blue";

//  getElementsByClassName -> seleccionar VARIOS elementos por su clase
const segundoDiv$$ = document.getElementsByClassName("small")[0];

segundoDiv$$.style.backgroundColor = "blue";

// getElementById -> selecciona UN elemento por su id
const tercerDiv$$ = document.getElementById("unico");

tercerDiv$$.style.backgroundColor = "blue";

// getElementsByName -> selecciona VARIOS elementos por su nombre
const cuartoDiv$$ = document.getElementsByName("nombre")[0];

cuartoDiv$$.style.backgroundColor = "blue";


//* LIFEHACK -> si quiero cambiar el color de todos los div al mismo tiempo lo primero que me tengo que encargar es de seleccionar todos.

// querySelectorAll funciona exactamente igual que el querySelector PERO me hará un array de los nodos o elementos que encuentre en vez de coger el primero como hacía querySelector
const allDivs = document.querySelectorAll("div");

for (const div of allDivs) {
    div.style.backgroundColor = "pink";
}