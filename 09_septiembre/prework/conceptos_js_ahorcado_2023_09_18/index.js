//! UN BUEN PROGRAMADOR NUNCA SE CARACTERIZA POR SABERSE DE MEMORIA LA SINTAXIS

// 1.2 seleccionar el botón inciar

// creo una variable
// utilizo la palabra reservada const para ello - una variable constante es una variable que no se puede reasignar
// le pongo nombre a la variable - btn_inicio
// document.querySelector("#btn_inicio") es el valor de la variable - es el botón del html
const btn_inicio = document.querySelector("#btn_inicio");

// 1.2 definir la función iniciar para poder usarla en el click del botón
//? ¿Qué es una función?
// es un trozo de código que declaro o escribo, para posteriormente utilizarla DONDE quiera y CUANTAS veces quiera

const abecedario = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let ALEATORIA = "";

const iniciar = () => {
  // 1.3 conseguir una palabra aleatoria de una caja donde tengamos muchas palabras
  ALEATORIA = getRandomWord();
  pintarAbecedario();

  pintarDivs(ALEATORIA);
};

const getRandomWord = () => {
  const palabras = ["gato", "perro", "pepino", "azucar", "sal", "agua", "oro", "loro"]; // 8
  //   0       1         2         3       4       5      6       7
  const aleatoria = palabras[Math.floor(Math.random() * palabras.length)];
  return aleatoria;
};

const pintarDivs = (palabra) => {
  const divPalabra = document.querySelector("#palabra");

  for (const letra of palabra) {
    const divLetra = document.createElement("div");
    const h3Letra = document.createElement("h3");

    h3Letra.textContent = letra;

    divLetra.append(h3Letra);
    divPalabra.append(divLetra);
  }
};

const comprobar = (e) => {
    if (ALEATORIA.includes(e.target.textContent)) {
        const h3$$ = document.querySelectorAll("h3");
        for (const elemento of h3$$) {
            if (elemento.textContent === e.target.textContent) {
                console.log("hola");
                elemento.classList.add("acertada");
            }
        }
    } else {
        console.log("no se incluye");
    }
}

const pintarAbecedario = () => {

    const teclado = document.querySelector("#teclado")

    for (const letra of abecedario) {
        const letra$$ = document.createElement("p");
        letra$$.textContent = letra;
        letra$$.addEventListener("click", comprobar)
        teclado.appendChild(letra$$);
    }

}
 
// 1.2 coger el botón btn_inicio y añadirle un escuchador de eventos, para que cuando le hagan click llame a la función iniciar
btn_inicio.addEventListener("click", iniciar);

// practicar hasta entender las herramientas a la perfección

// te acuerdas de cuando te dije que ibas a tener una función llamada iniciar que hacía...
//* INVOCAR A LA FUNCIÓN - te digo que hagas AHORA lo que hablamos antes
// iniciar()

// for
// if
// variables

//.filter

/* const comidas = ["pomelo", "manzana"]; */

// si cuando llegueis a los métodos de array hay algo que no entendáis y no sea sintaxis
// tenéis que volver al principio de JS

/* const comidasFiltradas = [];

for (let i = 0; i < comidas.length; i++) {

    let encontrada = false;

    for (let j = 0; j < comidas[i].length; j++) {
        if (comidas[i][j] === "o") {
            encontrada = true
        }
    }

    if (encontrada === true) {
        comidasFiltradas[comidasFiltradas.length] = comidas[i];
    }
    
} */

/* const comidasFiltradas = comidas.filter((comida) => comida.includes("o")); */

/* console.log(comidasFiltradas); */