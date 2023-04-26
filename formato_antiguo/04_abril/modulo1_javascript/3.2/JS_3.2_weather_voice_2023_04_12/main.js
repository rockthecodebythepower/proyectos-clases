import { ciudades } from "./ciudades";
import { mock } from "./mockApi";
import { pintarCarta } from "./src/components/Carta";
import "./style.css";

let TEXTO = "";

const botonVoz$$ = document.querySelector("#boton_voz");
const input$$ = document.querySelector("#input_buscador");
const button$$ = document.querySelector("#button_buscador");

const reconocedorDeVoz = new webkitSpeechRecognition();
reconocedorDeVoz.lang = "es-ES";
reconocedorDeVoz.interimResults = true;

const initHome = () => {
  botonVoz$$.addEventListener("click", () => {
    botonVoz$$.classList.add("activo");
    reconocedorDeVoz.start();
  });
};

const resultadoVoz = (e) => {
  TEXTO = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
};

const buscarTiempo = (texto) => {
  ciudades.forEach((ciudad) => {
    if (texto.includes(ciudad)) {
      peticion(ciudad);
      return;
    }
  });
  peticion("Madrid");
};

const peticion = async (ciudad) => {
  try {
    //! va a intentar hacer lo de aquí dentro y si no lo consigue saldrá por el catch
    const resultado = await fetch(
      "https://goweather.herokuapp.com/weather/" + ciudad
    );
    //! si la petición no funciona, aquí peta, y lo de abajo no lo hace
    const res = await resultado.json();
    pintarCarta(res, ciudad);
  } catch (error) {
    //* si ha petado el try o intento, entonces yo entro en acción y hago lo que tenga que hacer cuando la petición falle
    pintarCarta(mock, ciudad);
  }
  botonVoz$$.classList.remove("activo");
};

reconocedorDeVoz.addEventListener("result", resultadoVoz);
reconocedorDeVoz.addEventListener("end", () => buscarTiempo(TEXTO));
button$$.addEventListener("click", () => peticion(input$$.value));

initHome();
