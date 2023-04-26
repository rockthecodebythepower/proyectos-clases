import { ciudades } from "./ciudades";
import "./style.css"

let TEXTO = "";

const botonVoz$$ = document.querySelector("#boton_voz");

const reconocedorDeVoz = new webkitSpeechRecognition();
reconocedorDeVoz.lang = "es-ES";
reconocedorDeVoz.interimResults = true;

const initHome = () => {

  const app$$ = document.querySelector("#app");
  botonVoz$$.addEventListener("click", () => reconocedorDeVoz.start());

}

const resultadoVoz = (e) => {

  TEXTO = Array.from(e.results).map((result) => result[0]).map((result) => result.transcript).join("");

}

const buscarTiempo = (texto) => {

  ciudades.forEach((ciudad) => {
    if (texto.includes(ciudad)) {
      peticion(ciudad);
    }
  });

}

const peticion = async (ciudad) => {
  const resultado = await fetch("https://goweather.herokuapp.com/weather/" + ciudad);
  const res = await resultado.json();

  console.log(res);
  
}

reconocedorDeVoz.addEventListener("result", resultadoVoz);
reconocedorDeVoz.addEventListener("end", () => buscarTiempo(TEXTO));

initHome();