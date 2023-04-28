import { APP$$ } from "../../main";
import "./Main.css";

export const PROYECTS = [
  {
    name: "Canciones",
    imagen: "/assets/canciones.jpg",
    enlace: "https://canciones-sand.vercel.app/",
    estrellas: 5,
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    descripcion:
      "Esto fue un proyecto generado con html css y javascript en el cual aprendimos a gestionar un reproductor de música con la etiqueta audio por nuestra propia cuenta",
  },
  {
    name: "Whac A Bug",
    imagen: "/assets/bug.jpg",
    enlace: "https://whac-a-bug.vercel.app/",
    estrellas: 7,
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    descripcion:
      "Esto fue un proyecto generado con html css y javascript en el cual aprendimos a gestionar un reproductor de música con la etiqueta audio por nuestra propia cuenta",
  },
  {
    name: "Trivial",
    imagen: "/assets/trivial.jpg",
    enlace: "https://trivial-seven.vercel.app/",
    estrellas: 2,
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    descripcion:
      "Esto fue un proyecto generado con html css y javascript en el cual aprendimos a gestionar un reproductor de música con la etiqueta audio por nuestra propia cuenta",
  },
  {
    name: "Saddly Hues",
    imagen: "/assets/saddly-hues.jpg",
    enlace: "https://saddly-hues.vercel.app/",
    estrellas: 10,
    tecnologias: ["REACT", "CSS"],
    descripcion:
      "Esto fue un proyecto generado con html css y javascript en el cual aprendimos a gestionar un reproductor de música con la etiqueta audio por nuestra propia cuenta",
  },
  {
    name: "Spotify",
    imagen: "/assets/spotify.jpg",
    enlace: "https://spotify-html-five.vercel.app/",
    estrellas: 4,
    tecnologias: ["HTML", "CSS"],
    descripcion:
      "Esto fue un proyecto generado con html css y javascript en el cual aprendimos a gestionar un reproductor de música con la etiqueta audio por nuestra propia cuenta",
  },
];

let numeroProyecto = 0;

export const initMain = () => {
  const main$$ = document.querySelector("main");

  main$$.innerHTML = `
            <img src="/assets/chevron-left.svg" class="flecha" id="izquierda"/>
            <div class="proyecto fadeIn">
                <h3>${PROYECTS[numeroProyecto].descripcion}</h3>
                <div>
                    <h2>${PROYECTS[numeroProyecto].name}</h2>
                    <a href="${PROYECTS[numeroProyecto].enlace}" target="blank">
                        <div class="img_wrp">
                            <img src="${PROYECTS[numeroProyecto].imagen}"/>
                        </div>
                    </a>
                </div>
            </div>
            <img src="/assets/chevron-right.svg" class="flecha" id="derecha"/>
    `;

  añadirEventos();
};

const añadirEventos = () => {
  const izquierda$$ = document.querySelector("#izquierda");
  const derecha$$ = document.querySelector("#derecha");

  izquierda$$.addEventListener("click", () => pasarProyecto("izquierda"));
  derecha$$.addEventListener("click", () => pasarProyecto("derecha"));
};

const pasarProyecto = (direccion) => {
  if (direccion === "izquierda" && numeroProyecto > 0) {
    numeroProyecto--;
  } else if (direccion === "derecha" && numeroProyecto < PROYECTS.length) {
    numeroProyecto++;
  }

  initMain();
};
