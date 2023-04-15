const cucarachas$$ = document.querySelector(".cucarachas");
const dificultad$$ = document.querySelector("#dificultad");
const iniciar$$ = document.querySelector(".iniciar");
const puntuacion$$ = document.querySelector("#puntuacion");
const label$$ = document.querySelector("label");
const bomba$$ = document.querySelector(".bomba");

let intervalo;
let TIEMPO = 0;
let PUNTUACION = 0;
let bomba = false;

const initGame = () => {
  dificultad$$.classList.add("none");
  iniciar$$.classList.add("none");
  label$$.classList.add("none");

  if (dificultad$$.value === "baby") {
    TIEMPO = 1000;
  } else if (dificultad$$.value === "junior") {
    TIEMPO = 800;
  } else if (dificultad$$.value === "mid") {
    TIEMPO = 600;
  } else if (dificultad$$.value === "sennior") {
    TIEMPO = 400;
  } else {
    TIEMPO = 200;
  }

  intervalo = setInterval(() => {
    const cucaracha$$ = document.createElement("img");

    cucaracha$$.src = "./assets/cucaracha.png";
    cucaracha$$.className = "cucaracha";

    cucaracha$$.style.transform = `rotate(${Math.floor(
      Math.random() * 360
    )}deg)`;
    cucaracha$$.style.top = `${Math.floor(Math.random() * 95)}%`;
    cucaracha$$.style.bottom = `${Math.floor(Math.random() * 95)}%`;
    cucaracha$$.style.right = `${Math.floor(Math.random() * 95)}%`;
    cucaracha$$.style.left = `${Math.floor(Math.random() * 95)}%`;

    cucaracha$$.addEventListener("click", aplastar);

    document.body.appendChild(cucaracha$$);

    comprobar();
  }, TIEMPO);
};

const comprobar = () => {
  const cucarachas = document.querySelectorAll(".cucaracha");

  if (PUNTUACION === 50) {
    bomba$$.className = "estallar";
    bomba = true;
  }

  if (PUNTUACION >= 50) {
    bomba$$.addEventListener("click", nuclear);
  }

  if (cucarachas.length > 10) {
    alert(
      "Los bugs han dominado tu pantalla, sólo has conseguido solucionar " +
        PUNTUACION +
        " bugs"
    );
    clearInterval(intervalo);
  }
};

const aplastar = (e) => {
  e.target.src = "./assets/mancha.png";
  e.target.className = "mancha";
  PUNTUACION++;
  puntuacion$$.textContent = PUNTUACION;
};

const nuclear = () => {
  const cucarachas = document.querySelectorAll(".cucaracha");

  for (const cucaracha of cucarachas) {
    cucaracha.src = "./assets/mancha.png";
    cucaracha.className = "mancha";
    PUNTUACION++;
  }

  bomba$$.className = "bomba";
  bomba = false;
};

iniciar$$.addEventListener("click", initGame);
