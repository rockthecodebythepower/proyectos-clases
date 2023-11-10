const NARANJITOS = [
  {
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis amet perspiciatis quo fugiat ut voluptatem iure. Alias praesentium reprehenderit facilis accusamus numquam ipsa? Asperiores voluptate quaerat eius ullam molestiae?",
    usuario: {
      imagen: "./assets/user1.png",
      nombre: "Usuario1",
      arroba: "@usuario1",
    },
    comentarios: [
      {
        texto: "¡Excelente tweet!",
        usuario: {
          imagen: "./assets/user2.png",
          nombre: "Usuario2",
          arroba: "@usuario2",
        },
      },
      {
        texto: "¿Puedes creerlo?",
        usuario: {
          imagen: "./assets/user3.png",
          nombre: "Usuario3",
          arroba: "@usuario3",
        },
      },
    ],
    likes: 20,
  },
  {
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis amet perspiciatis quo fugiat ut voluptatem iure. Alias praesentium reprehenderit facilis accusamus numquam ipsa? Asperiores voluptate quaerat eius ullam molestiae?",
    usuario: {
      imagen: "./assets/user4.png",
      nombre: "Usuario4",
      arroba: "@usuario4",
    },
    comentarios: [
      {
        texto: "¡Me encanta este contenido!",
        usuario: {
          imagen: "./assets/user5.png",
          nombre: "Usuario5",
          arroba: "@usuario5",
        },
      },
      {
        texto: "¿Dónde puedo obtener más información?",
        usuario: {
          imagen: "./assets/user6.png",
          nombre: "Usuario6",
          arroba: "@usuario6",
        },
      },
    ],
    likes: 15,
  },
];

const user = {
  imagen: "./assets/user2.png",
  nombre: "Usuario2",
  arroba: "@usuario2",
};

const printNaranjitos = (naranjitos) => {
  const naranjitosSection = document.querySelector("#naranjitos");

  /* naranjitosSection.innerHTML = ""; */

  for (const naranjito of naranjitos) {
    // Crear los elementos
    const imgUser = document.createElement("img");
    const userName = document.createElement("h3");
    const arroba = document.createElement("p");
    const divUser = document.createElement("div");
    const text = document.createElement("p");
    const coments = document.createElement("img");
    const numberOfComents = document.createElement("p");
    const divComents = document.createElement("div");
    const likes = document.createElement("img");
    const numberOfLikes = document.createElement("p");
    const divLikes = document.createElement("div");
    const divInfo = document.createElement("div");
    const divNaranjito = document.createElement("div");

    // dando los valores
    imgUser.src = naranjito.usuario.imagen;
    imgUser.alt = naranjito.usuario.nombre;
    /* imgUser.setAttribute("src", naranjito.usuario.imagen); */
    userName.textContent = naranjito.usuario.nombre;
    arroba.textContent = naranjito.usuario.arroba;
    divUser.className = "userInfo";
    text.textContent = naranjito.texto;
    text.className = "textoPrincipal";
    coments.src = "./assets/comentario.png";
    numberOfComents.textContent = naranjito.comentarios.length;
    likes.src = "./assets/corazon.png";
    numberOfLikes.textContent = naranjito.likes;
    divInfo.classList.add("info");

    likes.addEventListener("click", (e) =>
      giveLike(e.target, numberOfLikes, naranjito)
    );

    // Añadir los elementos al HTML
    divUser.appendChild(imgUser);
    divUser.appendChild(userName);
    divUser.appendChild(arroba);
    divComents.appendChild(coments);
    divComents.appendChild(numberOfComents);
    divLikes.appendChild(likes);
    divLikes.appendChild(numberOfLikes);
    divInfo.appendChild(divComents);
    divInfo.appendChild(divLikes);
    divNaranjito.appendChild(divUser);
    divNaranjito.appendChild(text);
    divNaranjito.appendChild(divInfo);
    naranjitosSection.appendChild(divNaranjito);
  }
};

const giveLike = (imagen, numberOfLikes, naranjito) => {
  if (!imagen.className.includes("clickado")) {
    naranjito.likes++;
    numberOfLikes.textContent = naranjito.likes;
    imagen.src = "./assets/corazon_relleno.png";
    imagen.classList.add("clickado");
  }
};

printNaranjitos(NARANJITOS);

const printPublicar = () => {
  const publicar = document.querySelector("#publicar");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const img = document.createElement("img");

  img.src = "./assets/logo.png";
  input.placeholder = "Escribe aquí tu Naranjito...";
  button.addEventListener("click", () => postNaranjito(input));
  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      postNaranjito(input);
    }
  });

  publicar.appendChild(input);
  publicar.appendChild(button);
  button.appendChild(img);
};

const postNaranjito = (input) => {
  const naranjito = {
    texto: input.value,
    usuario: {
      imagen: user.imagen,
      nombre: user.nombre,
      arroba: user.arroba,
    },
    comentarios: [],
    likes: 0,
  };

  input.value = "";

  NARANJITOS.push(naranjito);

  const newArray = [naranjito];

  printNaranjitos(newArray);
};

printPublicar();
