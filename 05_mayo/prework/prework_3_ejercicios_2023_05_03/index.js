const NIVEL1 = [
  {
    test: "5 - 10",
    respuesta: -5,
  },
  {
    test: "15 + 1",
    respuesta: 16,
  },
  {
    test: "3 * 20",
    respuesta: 60,
  },
  {
    test: "50 / 10",
    respuesta: 5,
  },
  {
    test: "20 + 9",
    respuesta: 29,
  },
  {
    test: "14 - 5",
    respuesta: 9,
  },
  {
    test: "9 * 14",
    respuesta: 126,
  },
  {
    test: "8 - 3",
    respuesta: 5,
  },
  {
    test: "16 / 8",
    respuesta: 2,
  },
  {
    test: "8 / 8",
    respuesta: 1,
  },
  {
    test: "12 + 8",
    respuesta: 20,
  },
];

const NIVEL2 = [
  {
    test: "23 * 14",
    respuesta: 322,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
  {
    test: "45  / 34",
    respuesta: 1.3,
  },
];

const COMPROBAR$$ = document.querySelector(".comprobar");
const app$$ = document.querySelector("#app");
const nivel$$ = document.querySelector(".nivel");

const pintarPreguntas = (PREGUNTAS) => {
  app$$.innerHTML = "";

  PREGUNTAS.forEach((pregunta) => {
    app$$.innerHTML += `
        <div class="pregunta">
            <h2 class="test">${pregunta.test}</h2>
            <p class="igual">=</p>
            <input class="respuesta" type="number"/>
        </div>
    `;
  });
};

pintarPreguntas(NIVEL1);

const comprobar = () => {
  const ALLRESPUESTAS$$ = document.querySelectorAll(".respuesta");
  let acertadas = 0;

  let PREGUNTAS = [];

  if (nivel$$.value === "1") {
    PREGUNTAS = [...NIVEL1];
  } else {
    PREGUNTAS = [...NIVEL2];
  }

  //! MIRAR CUANTAS HA ACERTADO EL USUARIO
  for (let i = 0; i < PREGUNTAS.length; i++) {
    const pregunta = PREGUNTAS[i];
    const respuesta = ALLRESPUESTAS$$[i].value;

    if (pregunta.respuesta === parseFloat(respuesta)) {
      acertadas++;
    }
  }

  //* YA SABEMOS CUANTAS HA ACERTADO

  //? si ha acertado más o igual que la mitad de las preguntas existentes entonces ha aprobado (si hay 20 preguntas y acierta 10 entonces entrará en el if)
  if (acertadas >= PREGUNTAS.length / 2) {
    app$$.innerHTML = `
            <h2>Has aprobado acertando ${acertadas}!</h2>
            <img src="https://gifs.org.es/gifs/2020/08/5233/gif-cangrejo-bailando-feliz.gif" class="final"/>
        `;
  } else {
    app$$.innerHTML = `
            <h2>Has suspendido acertando ${acertadas}</h2>
            <img src="https://s.yimg.com/ny/api/res/1.2/63KoTFcLlhQyFuubJT7Nhg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f524cfbf60200aa9346f308d700e3eec" class="final"/>
        `;
  }

  COMPROBAR$$.style.display = "none";
};

const cambiarNivel = (e) => {
  if (e.target.value === "1") {
    pintarPreguntas(NIVEL1);
  } else {
    pintarPreguntas(NIVEL2);
  }
};

nivel$$.addEventListener("change", cambiarNivel);
COMPROBAR$$.addEventListener("click", comprobar);