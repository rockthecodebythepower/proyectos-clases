import "./style.css";

const PLAYERS = {
  player1: {
    nombre: "Julito",
    carton: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
  player2: {
    nombre: "Paquito",
    carton: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
  player3: {
    nombre: "Jorge",
    carton: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
};

let NUMBERS = Array(89).fill(null);
NUMBERS = NUMBERS.map((el, index) => index + 1);

const divBola = document.createElement("div");
divBola.classList.add("bola");
document.body.append(divBola);

const carton1 = document.createElement("div");
carton1.classList.add("carton");
document.body.append(carton1);

const cartonEnemigo1 = document.createElement("div");
cartonEnemigo1.classList.add("cartonEnemigo", "enemigo1", "carton");
document.body.append(cartonEnemigo1);

const cartonEnemigo2 = document.createElement("div");
cartonEnemigo2.classList.add("cartonEnemigo", "enemigo2", "carton");
document.body.append(cartonEnemigo2);

const tachar = (number) => {
  tacharReal(
    [
      {
        carton: PLAYERS.player1.carton,
        cartonDiv: carton1,
        nombre: PLAYERS.player1.nombre,
      },
    ],
    true,
    number
  );
};

const printCasillas = (div, carton, miCarton) => {
  div.innerHTML = "";
  for (const column of carton) {
    for (const fila of column) {
      const casilla = document.createElement("div");
      casilla.classList.add("casilla", fila?.status);
      if (!fila?.number) {
        casilla.classList.add("null");
      }
      casilla.textContent = fila?.number === 0 ? "" : fila?.number;

      if (miCarton && fila?.number) {
        casilla.addEventListener("click", () => tachar(fila.number));
      }

      div.append(casilla);
    }
  }
};

const initCarton = (cartonDiv, carton, miCarton) => {
  let num = 10; // declaro una variable numérica que su valor comienza en 10
  let decena = 0; // declaro una variable numérica que su valor comienza en 0
  let unicos = []; // declaro una variable de tipo array vacío

  // tenemos un bucle que da dos vueltas, es decir el código de dentro se ejecuta un total de dos veces.
  for (let i = 0; i < 2; i++) {
    // una columna aleatoria - número entre 0 - 8
    let random = Math.floor(Math.random() * (carton.length + 1));
    while (unicos.includes(random)) {
      random = Math.floor(Math.random() * (carton.length + 1));
    }
    unicos.push(random);
    // unicos = [2, 4];
  }

  // bucle que da tantas vueltas como columnas tiene el cartón - 0 - 8 (9 vueltas)
  for (let i = 0; i < carton.length; i++) {
    // declaramos un array vacío
    const arrayRandoms = [];

    // declaramos una variable numérica que comienza valiendo 2
    let aleatorioUnico = 2;

    // 0 - 9 -> 2, 4
    if (unicos.includes(i)) {
      // restas uno a la variable aleatorioUnico
      aleatorioUnico = 1;
    }

    // recorre el aleatorioUnico - o da una vuelta el bucle o dos
    for (let j = 0; j < aleatorioUnico; j++) {
      // 0 - 10
      let random = Math.floor(Math.random() * num) + decena;
      while (arrayRandoms.includes(random)) {
        random = Math.floor(Math.random() * num) + decena;
      }
      arrayRandoms.push(random);
      // arrayRandoms = [3, 9]
    }

    // intento de ordenación
    arrayRandoms.sort((a, b) => a - b);

    // length 1 - 2
    for (let k = 0; k < arrayRandoms.length; k++) {
      let position = Math.floor(Math.random() * (2 + k));
      while (carton[i][position] != null) {
        position = Math.floor(Math.random() * (2 + k));
      }
      carton[i][position] = { number: arrayRandoms[k], status: "no-tachado" };
    }

    decena += 10;
  }
  printCasillas(cartonDiv, carton, miCarton);
};

initCarton(carton1, PLAYERS.player1.carton, true);
initCarton(cartonEnemigo1, PLAYERS.player2.carton, false);
initCarton(cartonEnemigo2, PLAYERS.player3.carton, false);

let intervalo;

const getNumbers = () => {
  intervalo = setInterval(() => {
    const posicionAleatoria = Math.floor(Math.random() * NUMBERS.length);
    const number = NUMBERS.splice(posicionAleatoria, 1)[0];

    const texto = new SpeechSynthesisUtterance(number);
    speechSynthesis.speak(texto);

    divBola.textContent = number;
    tacharEnemigos(number);
  }, 2500);
};

const tacharEnemigos = (number) => {
  const arrayEnemigos = [
    {
      carton: PLAYERS.player2.carton,
      cartonDiv: cartonEnemigo1,
      nombre: PLAYERS.player2.nombre,
    },
    {
      carton: PLAYERS.player3.carton,
      cartonDiv: cartonEnemigo2,
      nombre: PLAYERS.player3.nombre,
    },
  ];

  tacharReal(arrayEnemigos, false, number);
};

const tacharReal = (array, miCarton, number) => {
  console.log(number);

  for (const player of array) {
    for (let i = 0; i < player.carton.length; i++) {
      const posicionColumna = player.carton[i].findIndex(
        (el) => el?.number === number
      );

      if (posicionColumna !== -1) {
        console.log(player.carton);
        player.carton[i][posicionColumna].status = "tachado";
      }
    }

    printCasillas(player.cartonDiv, player.carton, miCarton);

    // que no tiene ningún dato que ponga no-tachado.

    let ganado = true;

    for (let i = 0; i < player.carton.length; i++) {
      const posicionColumna = player.carton[i].findIndex(
        (el) => el?.status === "no-tachado"
      );

      if (posicionColumna !== -1) {
        ganado = false;
      }
    }

    if (ganado) {
      const playerNumbers = player.carton.map((fila) => {
        const res = fila.map((columna) => columna?.number);
        for (const el of res) {
          if (el) {
            return el;
          }
        }
      });

      for (const a of playerNumbers) {
        if (NUMBERS.includes(a)) {
          ganado = false;
        }
      }

      if (ganado) {
        clearInterval(intervalo);
        setTimeout(() => {
          alert(`El jugador ${player.nombre} ha ganado!!!`);
        }, 500);
      } else {
        clearInterval(intervalo);
        setTimeout(() => {
          alert(`No hagas trampas! Has perdido.`);
        }, 500);
      }
    }
  }
};

getNumbers();
