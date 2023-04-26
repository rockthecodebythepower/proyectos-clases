import { FUNKOS } from "../../main";
import "./Combate.css";

let JUGADOR1 = null;
let JUGADOR2 = null;
let VIDAJ1 = 0;
let VIDAJ2 = 0;

export const initCombate = () => {
  const start$$ = document.querySelector("#start");
  start$$.addEventListener("click", start);
  crearCombate();
};

const crearCombate = () => {
  const jugador1$$ = document.querySelector("#jugador1");
  const jugador2$$ = document.querySelector("#jugador2");

  jugador1$$.innerHTML += `
            <option value="">Elige tu personaje</option>
        `;
  jugador2$$.innerHTML += `
            <option value="">Elige tu personaje</option>
        `;

  FUNKOS.forEach((funko) => {
    jugador1$$.innerHTML += `
            <option value="${funko._id}">${funko.nombre}</option>
        `;
    jugador2$$.innerHTML += `
            <option value="${funko._id}">${funko.nombre}</option>
        `;
  });

  jugador1$$.addEventListener("change", seleccionarJugador);
  jugador2$$.addEventListener("change", seleccionarJugador);
};

const seleccionarJugador = async (e) => {
  const id = e.target.value;

  const imgJugador1$$ = document.querySelector("#img_jugador1");
  const imgJugador2$$ = document.querySelector("#img_jugador2");

  /*//! manera con petición -> si yo hago una petición mi js simplemente espera que llegue un dato
    const resultado = await fetch("https://back-funkos.vercel.app/api/v1/funkos/" + id);
    const res = await resultado.json();
    console.log(res); */

  //! manera con lógica de js -> proceso de cálculo (encontrar) -> una serie de comprobaciones por dentro, JAVASCRIPT SE EJECUTA EN LA MÁQUINA CLIENTE

  if (id) {
    //! -> cuando tengo id hago lo de aquí
    const funko = FUNKOS.find((funko) => funko._id === id);

    e.target.id === "jugador1"
      ? ((JUGADOR1 = funko), (VIDAJ1 = funko.vida))
      : ((JUGADOR2 = funko), (VIDAJ2 = funko.vida));

    e.target.id === "jugador1"
      ? (imgJugador1$$.src = funko.imagen)
      : (imgJugador2$$.src = funko.imagen);
  } else {
    //! -> cuando no tengo id hago lo de aquí
    e.target.id === "jugador1"
      ? ((JUGADOR1 = null), (VIDAJ1 = 0))
      : ((JUGADOR2 = null), (VIDAJ2 = 0));

    e.target.id === "jugador1"
      ? (imgJugador1$$.src =
          "https://i5.walmartimages.com/asr/76f8abf7-34f8-4f0d-8fec-0e50a031a477_1.16580d64e5ca0a1443faccefd2ba9c61.png")
      : (imgJugador2$$.src =
          "https://i5.walmartimages.com/asr/76f8abf7-34f8-4f0d-8fec-0e50a031a477_1.16580d64e5ca0a1443faccefd2ba9c61.png");
  }
};

const start = () => {

  /* const start$$ = document.querySelector("#start"); */

  if (!JUGADOR1 || !JUGADOR2) {
    return alert(
      "No puedes iniciar el combate, debes seleccionar los dos jugadores"
    );
  }

  /* start$$.setAttribute("disabled", "true"); */

  alert("Empieza la pelea!");

  pintarJugadores();

  document.addEventListener("keyup", pegar);
};

const pintarJugadores = () => {
  const pelea$$ = document.querySelector(".pelea");
  const combate$$ = document.createElement("div");

  pelea$$.innerHTML = "";

  console.log(JUGADOR1);
  console.log(JUGADOR2);

  for (let i = 1; i <= 2; i++) {
    const jugador$$ = document.createElement("div");
    const imgWrp$$ = document.createElement("div");
    const imgPlayer$$ = document.createElement("img");
    const barritaVida$$ = document.createElement("div");
    const vida$$ = document.createElement("div");

    vida$$.className = "vida";
    barritaVida$$.className = "barrita-vida";
    barritaVida$$.classList.add(i);
    imgWrp$$.className = "img_wrp_player_combate";

    if (i === 1) {
      imgPlayer$$.src = JUGADOR1.imagen;
      imgPlayer$$.className = "jugador1-imagen"
      combate$$.appendChild(jugador$$);
      vida$$.textContent = JUGADOR1.vida;
      const vs$$ = document.createElement("img");
      vs$$.className = "vs"
      vs$$.src =
        "https://media2.giphy.com/media/l4pTkNEd2P4MWo9iw/giphy.gif?cid=a267dfa32o1waf545z10uabjwjy3u697l12utdt6xgd9o7eh&rid=giphy.gif&1679875200115";
      combate$$.appendChild(vs$$);
    } else {
      imgPlayer$$.src = JUGADOR2.imagen;
      vida$$.textContent = JUGADOR2.vida;
      imgPlayer$$.className = "jugador2-imagen"
      combate$$.appendChild(jugador$$);
    }

    barritaVida$$.appendChild(vida$$);
    jugador$$.appendChild(imgWrp$$);
    jugador$$.appendChild(barritaVida$$);

    imgWrp$$.appendChild(imgPlayer$$);
  }

  pelea$$.appendChild(combate$$);
};

const pegar = (e) => {
  
  const jugador1Imagen$$ = document.querySelector(".jugador1-imagen");
  const jugador2Imagen$$ = document.querySelector(".jugador2-imagen")
  const barritas$$ = document.querySelectorAll(".vida");
  const barrita1$$ = barritas$$[0];
  const barrita2$$ = barritas$$[1];

  if (e.key === "a") {
    const vidaResultante = JUGADOR2.vida - JUGADOR1.poder;

    if (vidaResultante <= 0) {
      barrita2$$.setAttribute("style", `width: 0%`);
      barrita2$$.textContent = 0;
      setTimeout(() => {
        alert("El jugador 1 ha ganado");
      }, 500);
      jugador2Imagen$$.classList.add("muerto");
      /* const start$$ = document.querySelector("#start");
      start$$.setAttribute("disabled", "false"); */
    } else {
      const porcentaje = (vidaResultante / VIDAJ2) * 100;
      barrita2$$.textContent = vidaResultante;
      JUGADOR2.vida = vidaResultante;
      barrita2$$.setAttribute("style", `width: ${porcentaje}%`);
    }
  }

  if (e.key === "ñ") {
    const vidaResultante = JUGADOR1.vida - JUGADOR2.poder;

    if (vidaResultante <= 0) {
      barrita1$$.setAttribute("style", `width: 0%`);
      barrita1$$.textContent = 0;
      setTimeout(() => {
        alert("El jugador 2 ha ganado");
      }, 500);
      jugador1Imagen$$.classList.add("muerto");
      /* const start$$ = document.querySelector("#start");
      start$$.setAttribute("disabled", "false"); */
    } else {
      const porcentaje = (vidaResultante / VIDAJ1) * 100;
      barrita1$$.textContent = vidaResultante;
      JUGADOR1.vida = vidaResultante;
      barrita1$$.setAttribute("style", `width: ${porcentaje}%`);
    }
  }
};