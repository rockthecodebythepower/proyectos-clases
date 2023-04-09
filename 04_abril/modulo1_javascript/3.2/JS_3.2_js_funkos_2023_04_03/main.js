import { initCombate } from "./src/components/Combate";
import "./style.css";

export let FUNKOS = [];

const initHome = () => {
  peticionFunkos();
};

const peticionFunkos = async () => {
  const resultado = await fetch(
    "https://back-funkos.vercel.app/api/v1/funkos/"
  );
  const res = await resultado.json();
  FUNKOS = [...res];
  pintar(FUNKOS);
  initCombate();
};

const pintar = (funkos) => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = ``;

  for (const funko of funkos) {
    app$$.innerHTML += `
      <div class="funko">
        <h2>${funko.nombre}</h2>
        <div class="imagen_wrp">
          <img class="imagen" src="${funko.imagen}"/>
        </div>
        <h3>${funko.pelicula}</h3>
        <p>Altura: ${funko.altura}cm</p>
        <p>Peso: ${funko.peso}g</p>
      </div>
    `;
  }
};

initHome();