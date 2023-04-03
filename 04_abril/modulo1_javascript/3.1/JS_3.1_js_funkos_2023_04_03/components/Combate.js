import { FUNKOS } from "../main";
import "./Combate.css";

let JUGADOR1 = null;
let JUGADOR2 = null;

export const initCombate = () => {

    document.addEventListener("keydown", pegar);

  crearCombate();
};

const crearCombate = () => {
  const combate$$ = document.querySelector("#combate");

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
    //! -> cuando no tengo id hago lo de aquí
    const funko = FUNKOS.find((funko) => funko._id === id);

    e.target.id === "jugador1" ? (JUGADOR1 = funko) : (JUGADOR2 = funko);

    e.target.id === "jugador1"
      ? (imgJugador1$$.src = funko.imagen)
      : (imgJugador2$$.src = funko.imagen);
   
  } else {
    //! -> cuando no tengo id hago lo de aquí
    e.target.id === "jugador1" ? (JUGADOR1 = null) : (JUGADOR2 = null);

    e.target.id === "jugador1"
      ? (imgJugador1$$.src =
          "https://i5.walmartimages.com/asr/76f8abf7-34f8-4f0d-8fec-0e50a031a477_1.16580d64e5ca0a1443faccefd2ba9c61.png")
      : (imgJugador2$$.src =
          "https://i5.walmartimages.com/asr/76f8abf7-34f8-4f0d-8fec-0e50a031a477_1.16580d64e5ca0a1443faccefd2ba9c61.png");
  }

};


const pegar = (e) => {

    if (e.key === " ") {
        console.log("COMIENZA EL COMBATE");
    }

    if (e.key === "a") {
        console.log("El jugar 1 está pegando");
    }

    if (e.key === "ñ") {
        console.log("El jugar 2 está pegando");
    }

}