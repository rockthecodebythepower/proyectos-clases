// DOM -> DOCUMENT OBJECT MODEL

import { imgs } from "./photos.js";

const container = document.querySelector(".container");

container.classList.add("gallery-common");

// podríamos calcular con las imágenes que tengamos para cada galería 10x10
// 12 imágenes -> repartir aleatoriamente sin que se pisen unos valores a otros por nuestro grid

for (const img of imgs) {
  const divImg = document.createElement("div");

  divImg.classList.add("img-container");

  divImg.style.gridArea = `${Math.floor(Math.random() * 10) + 1} / ${
    Math.floor(Math.random() * 10) + 1
  } / ${Math.floor(Math.random() * 10) + 1} / ${
    Math.floor(Math.random() * 10) + 1
  }`;

  divImg.innerHTML = `<img src="${img.src}" alt="${img.alt}"/>`;

  container.append(divImg);
}

//? el método map recorre el array Y DEVUELVE UN NUEVO ARRAY RESULTANTE

/* console.log(imgs.map((img) => "😎")); */
