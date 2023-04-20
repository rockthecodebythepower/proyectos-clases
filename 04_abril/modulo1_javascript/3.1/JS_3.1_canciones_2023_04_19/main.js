import {
  añadirEscuchadores,
  pintarCancion,
} from "./components/Cancion/Cancion";
import "./style.css";

export let CANCIONES = [
  {
    _id: 1,
    name: "Getting Over",
    album: "One Love",
    cover:
      "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
    artist: {
      name: "David Guetta",
      nickname: "David Guetta",
      nationality: "FR",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track.mp3`,
  },
  {
    _id: 2,
    name: "Snow Tha Product || BZRP Music Sessions #39",
    album: "BZRP Music Sessions",
    cover:
      "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg",
    artist: {
      name: "Snow",
      nickname: "Snow",
      nationality: "US",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-1.mp3`,
  },
  {
    _id: 3,
    name: "Calypso (Original Mix)",
    album: "Round Table Knights",
    cover:
      "https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg",
    artist: {
      name: "Round Table Knights",
      nickname: "Round Table Knights",
      nationality: "US",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-2.mp3`,
  },
  {
    _id: 4,
    name: "Bad Habits",
    album: "Ed Sheeran",
    cover:
      "https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg",
    artist: {
      name: "Ed Sheeran",
      nickname: "Ed Sheeran",
      nationality: "UK",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-4.mp3`,
  },
  {
    _id: 5,
    name: "BEBE (Official Video)",
    album: "Giolì & Assia",
    cover: "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    artist: {
      name: "Giolì & Assia",
      nickname: "Giolì & Assia",
      nationality: "IT",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-3.mp3`,
  },
  {
    _id: 6,
    name: "T.N.T. (Live At River Plate, December 2009)",
    album: "AC/DC",
    cover:
      "https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg",
    artist: {
      name: "AC/DC",
      nickname: "AC/DC",
      nationality: "US",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-5.mp3`,
  },
  {
    _id: 7,
    name: "50 Cent - Candy Shop (feat. Olivia)",
    album: "50 Cent",
    cover: "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
    artist: {
      name: "50 Cent",
      nickname: "50 Cent",
      nationality: "US",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-6.mp3`,
  },
  {
    _id: 8,
    name: "Bésame💋",
    album: "Valentino Ft MTZ Manuel Turizo (Video Oficial)",
    cover: "https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg",
    artist: {
      name: "Valentino",
      nickname: "Valentino",
      nationality: "CO",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-7.mp3`,
  },
  {
    _id: 9,
    name: "Play hard",
    album: "David Guetta",
    cover: "https://i1.sndcdn.com/artworks-000159303363-i5uf5c-t500x500.jpg",
    artist: {
      name: "David Guetta",
      nickname: "David Guetta",
      nationality: "FR",
    },
    duration: {
      start: 0,
      end: 333,
    },
    url: `/songs/track-7.mp3`,
  },
];

const buscador$$ = document.querySelector("#buscador");
export const state$$ = document.querySelector("#state");
export const volume$$ = document.querySelector("#volumen");
const audio$$ = document.querySelector("#audio");
const dato$$ = document.querySelector(".dato");
const imgVolumen$$ = document.querySelector("#img-volumen");
export const start$$ = document.querySelector(".start");
export const end$$ = document.querySelector(".end");
const progress$$ = document.querySelector(".progress");

let VOLUMEN = 0.5;
let VOLUMENANTERIOR = 0;
let PLAYING = false;

const initHome = () => {
  /* getAllSongs(); */
  pintarCanciones(CANCIONES);
};

/* const getAllSongs = async () => {
  const resultado = await fetch("http://localhost:3000/api/1.0/tracks");
  const res = await resultado.json();

  CANCIONES = [...res.data];
  pintarCanciones(CANCIONES);
}; */

const pintarCanciones = (canciones) => {
  const app$$ = document.querySelector("#app");

  const canciones$$ = document.createElement("div");
  app$$.innerHTML = "";

  canciones$$.className = "canciones";

  app$$.appendChild(canciones$$);

  for (const cancion of canciones) {
    pintarCancion(cancion, canciones$$);
  }
};

export const filtrar = (e) => {
  const cancionesFiltered = CANCIONES.filter(
    (cancion) =>
      cancion.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      cancion.artist.nickname
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
  );

  pintarCanciones(cancionesFiltered);
};

const toggle = () => {
  if (PLAYING) {
    pause();
  } else {
    play();
  }

  console.log(PLAYING);
};

let INTERVALO;

export const pause = () => {
  audio$$.pause();
  state$$.src = "/assets/play.svg";
  PLAYING = false;
  clearInterval(INTERVALO);
};

export const play = () => {
  INTERVALO = setInterval(() => {
    progress$$.max = audio$$.duration;
    progress$$.value = audio$$.currentTime;
    start$$.textContent = ("0" + audio$$.currentTime / 60).slice(0, 5).replace(".", ":");
    end$$.textContent = ("0" + audio$$.duration / 60).slice(0,5).replace(".", ":");
  }, 1000);
  audio$$.play();
  state$$.src = "/assets/pause.svg";
  PLAYING = true;
};

const changeVolume = (e) => {
  audio$$.volume = e.target.value / 100;
  VOLUMEN = e.target.value / 100;
  dato$$.textContent = e.target.value + "%";

  if (VOLUMEN === 0) {
    imgVolumen$$.src = "/assets/volume-x.svg";
  } else if (VOLUMEN < 0.5) {
    imgVolumen$$.src = "/assets/volume-low.svg";
  } else {
    imgVolumen$$.src = "/assets/volume.svg";
  }
};

const mute = () => {
  if (VOLUMEN === 0) {
    let temporal = VOLUMEN;
    VOLUMEN = VOLUMENANTERIOR;
    audio$$.volume = VOLUMEN;
    VOLUMENANTERIOR = temporal;
    dato$$.textContent = VOLUMEN * 100 + "%";
    volume$$.value = Math.round(VOLUMEN * 100);
  } else {
    VOLUMENANTERIOR = VOLUMEN;
    VOLUMEN = 0;
    audio$$.volume = VOLUMEN;
    dato$$.textContent = 0 + "%";
    volume$$.value = 0;
  }

  if (VOLUMEN === 0) {
    imgVolumen$$.src = "/assets/volume-x.svg";
  } else {
    imgVolumen$$.src = "/assets/volume.svg";
  }
};

buscador$$.addEventListener("input", filtrar);
state$$.addEventListener("click", toggle);
volume$$.addEventListener("change", changeVolume);
imgVolumen$$.addEventListener("click", mute);

initHome();

setTimeout(() => {
  añadirEscuchadores();
}, 1000);
