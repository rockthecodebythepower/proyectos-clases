import { CANCIONES, end$$, play, start$$ } from "../../main";
import "./Cancion.css";

export const pintarCancion = (cancion, canciones$$) => {
  const song$$ = document.createElement("div");

  song$$.className = "song";

  song$$.innerHTML += `
        <div class="song-img">
            <img src="${cancion.cover}" alt="${cancion.name}"/>
        </div>
        <div class="song-info">
            <h3>${cancion.name}</h3>
            <p>${cancion.artist.nickname}</p>
        </div>
    `;

  canciones$$.appendChild(song$$);
};

export const añadirEscuchadores = () => {
  const songs$$ = document.querySelectorAll(".song");

  for (let i = 0; i < songs$$.length; i++) {
    const song$$ = songs$$[i];
    const cancion = CANCIONES[i];

    song$$.addEventListener("click", (e) => seleccionarCancion(e, cancion));
  }
};

const seleccionarCancion = (e, cancion) => {
  const audio$$ = document.querySelector("#audio");
  const cover$$ = document.querySelector(".cover");

  cover$$.style.backgroundImage = `url("${cancion.cover}")`;
  start$$.textContent = "00:00";

  audio$$.src = cancion.url;

  
  play()
};
