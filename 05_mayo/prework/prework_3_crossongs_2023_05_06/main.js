import { pintar } from "./components/Song/Song";
import { initVolume } from "./components/Volume/Volume";
import "./style.css";

//? seleccionamos nuestro div app de nuestro documento
const APP$$ = document.querySelector("#app");

export const SONGS = [];

//! DECLARACIÓN DE LA FUNCIÓN INITAPP
const initApp = () => {
  //? inyectamos contenido dentro de nuestro div app
  APP$$.innerHTML = `
    <h1>Animal Crossing ~ Songs</h1>
    <div class="song"></div>
    <audio autoplay loop></audio>
    <div class="volumen"></div>
  `;

  peticion(50);
  initVolume();
  const audio$$ = document.querySelector("audio");
  audio$$.volume = 0.3;
};

const peticion = async (limite) => {

  const song$$ = document.querySelector(".song");

  song$$.innerHTML = `
    <img src="https://i.gifer.com/67Pj.gif" class="loading"/>
  `

  for (let i = 1; i <= limite; i++) {
    const resultado = await fetch("https://acnhapi.com/v1/songs/" + i); //! TARDA X SEGUNDOS
    const res = await resultado.json();
    SONGS.push(res);
  }

  setTimeout(() => {
    pintar(SONGS[0]);
  }, 3000);

};

//! EJECUCIÓN DE LA FUNCIÓN INITAPP
initApp();