const main$$ = document.querySelector("#main");
const titulo$$ = document.createElement("h1");

titulo$$.textContent = "TRES EN RAYA";

let TABLERO = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const ganadas = {
    x: [],
    o: []
}

let SELECCIONADO = "";

//! DECLARACIÓN DE UNA FUNCIÓN
const crearTablero = () => {
  main$$.innerHTML = ``;

  const tablero$$ = document.createElement("div");

  crearCasillas(tablero$$);

  //! classList -> añade o elimina una clase con sus métodos add y remove
  //* className -> sobreescribe todas las clases de elemento y pone la que le indiques
  tablero$$.className = "tablero";

  main$$.appendChild(titulo$$);
  main$$.appendChild(tablero$$);

  crearPregunta();
};

const crearCasillas = (tablero$$) => {
  for (let i = 0; i < TABLERO.length; i++) {
    for (let j = 0; j < TABLERO[i].length; j++) {
      const nuevaCasilla$$ = document.createElement("div");

      nuevaCasilla$$.classList.add("casilla");
      nuevaCasilla$$.classList.add(i + "" + j);

      nuevaCasilla$$.addEventListener("click", elegir);

      tablero$$.appendChild(nuevaCasilla$$);
    }
  }
};

const crearPregunta = () => {
  const pregunta$$ = document.createElement("div");
  const texto$$ = document.createElement("h3");
  const x$$ = document.createElement("div");
  const o$$ = document.createElement("div");

  texto$$.innerText = "¿QUIÉN EMPIEZA?";
  x$$.innerText = "X";
  o$$.innerHTML = "O";
  pregunta$$.classList.add("pregunta");

  x$$.addEventListener("click", (e) => seleccionar(e, "x"));
  o$$.addEventListener("click", (e) => seleccionar(e, "o"));

  pregunta$$.appendChild(texto$$);
  pregunta$$.appendChild(x$$);
  pregunta$$.appendChild(o$$);

  main$$.appendChild(pregunta$$);
};

const seleccionar = (e, jugador) => {
  SELECCIONADO = jugador;
  e.target.parentElement.remove();
};

const elegir = (e) => {
  if (SELECCIONADO === "") {
    return alert("debes seleccionar quien empieza primero");
  }

  if (e.target.textContent === "") {
    pintar(e);
  }

  comprobar();
};

const pintar = (e) => {
  e.target.textContent = SELECCIONADO;
  TABLERO[parseInt(e.target.classList[1][0])][
    parseInt(e.target.classList[1][1])
  ] = SELECCIONADO;
  SELECCIONADO = SELECCIONADO === "x" ? "o" : "x";
};

const comprobar = () => {
  let GANADOR = "";

  const seleccionadoAnterior = SELECCIONADO === "x" ? "o" : "x";

  //? COMPROBANDO FILAS
  for (let i = 0; i < TABLERO.length; i++) {
    if (
      TABLERO[i][0] === seleccionadoAnterior &&
      TABLERO[i][1] === seleccionadoAnterior &&
      TABLERO[i][2] === seleccionadoAnterior
    ) {
      GANADOR = seleccionadoAnterior;
    }
  }

  //? COMPROBANDO COLUMNAS
  for (let i = 0; i < TABLERO.length; i++) {
    if (
      TABLERO[0][i] === seleccionadoAnterior &&
      TABLERO[1][i] === seleccionadoAnterior &&
      TABLERO[2][i] === seleccionadoAnterior
    ) {
      GANADOR = seleccionadoAnterior;
    }
  }

  if (
    TABLERO[0][0] === seleccionadoAnterior &&
    TABLERO[1][1] === seleccionadoAnterior &&
    TABLERO[2][2] === seleccionadoAnterior
  ) {
    GANADOR = seleccionadoAnterior;
  }

  if (
    TABLERO[0][2] === seleccionadoAnterior &&
    TABLERO[1][1] === seleccionadoAnterior &&
    TABLERO[2][0] === seleccionadoAnterior
  ) {
    GANADOR = seleccionadoAnterior;
  }

  let EMPATE = false;

  if (
    !TABLERO[0].some((casilla) => casilla === "") &&
    !TABLERO[1].some((casilla) => casilla === "") &&
    !TABLERO[2].some((casilla) => casilla === "")
  ) {
    EMPATE = true;
  } else {
    EMPATE = false;
  }

  if (EMPATE && GANADOR === "") {
    setTimeout(() => {
      alert("EMPATE");
    }, 500);
    setTimeout(() => {
      SELECCIONADO = "";
      crearTablero();
      TABLERO = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    }, 1000);
  }

  if (GANADOR !== "") {
    setTimeout(() => {
      alert(`HA GANADO ${GANADOR}`);
      ganadas[GANADOR].push(ganadas[GANADOR].length + 1);
      actualizarGanador(GANADOR);
    }, 500);
    setTimeout(() => {
      SELECCIONADO = "";
      crearTablero();
      TABLERO = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    }, 1000);
  }

};

const actualizarGanador = (GANADOR) => {

    const jugador$$ = document.querySelector(`.${GANADOR}`);
    jugador$$.innerHTML = "";
    for (let i = 0; i < ganadas[GANADOR].length; i++) {
        
        const dato$$ = document.createElement("div");
        dato$$.textContent = ganadas[GANADOR][i];
        jugador$$.appendChild(dato$$)
        
    }

}

crearTablero();
