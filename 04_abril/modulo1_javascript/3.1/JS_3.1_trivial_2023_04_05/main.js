import { preguntas } from "./preguntas";
import "./style.css"

const RESULTADOS = [];

const initHome = () => {
  pintarPreguntas();
};

const pintarPreguntas = () => {
  const app$$ = document.querySelector("#app");

  for (let i = 0; i < preguntas.length; i++) {

    let tarjeta = preguntas[i];

    RESULTADOS.push({
      respuestaCorrecta: tarjeta.correcta,
      respuestaElegida: "",
    });

    const tarjeta$$ = document.createElement("div");
    const pregunta$$ = document.createElement("h3");

    tarjeta$$.className = "tarjeta";
    pregunta$$.textContent = tarjeta.pregunta;

    tarjeta$$.appendChild(pregunta$$);

    tarjeta.respuestas.forEach((respuesta) => {
      const respuesta$$ = document.createElement("h4");

      respuesta$$.classList.add("agrupacion" + i);
      respuesta$$.textContent = respuesta;
      respuesta$$.addEventListener("click", () => elegir(tarjeta, respuesta, respuesta$$));

      tarjeta$$.appendChild(respuesta$$);
    });

    app$$.appendChild(tarjeta$$);
  }

};

const elegir = (tarjeta, respuesta, respuesta$$) => {

  const respuestas$$ = document.querySelectorAll(`.${respuesta$$.className}`);

  for (const r$$ of respuestas$$) {
    r$$.classList.remove("seleccionada");
  }

  respuesta$$.classList.add("seleccionada");

  const posicion = preguntas.indexOf(tarjeta);

  RESULTADOS[posicion].respuestaElegida = respuesta;

  console.log(RESULTADOS);

  let relleno = true;

  for (const resultado of RESULTADOS) {
    if (resultado.respuestaElegida === "") {
      relleno = false;
    }
  }

  if (relleno) {
    const comprobar$$ = document.querySelector("#comprobar");

    comprobar$$.addEventListener("click", comprobar);
  }

}

const comprobar = () => {

  let correctas = 0;

  for (const resultado of RESULTADOS) {
    if (resultado.respuestaCorrecta === resultado.respuestaElegida) {
      correctas++;
    }
  }

  alert(`Has sacado un: ${correctas}`);

}

initHome();