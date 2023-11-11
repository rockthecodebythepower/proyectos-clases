let NARANJITOS;
let USER;

const printNaranjitos = (naranjitos) => {
  console.log(naranjitos);
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
      imagen: USER.imagen,
      nombre: USER.nombre,
      arroba: USER.arroba,
    },
    comentarios: [],
    likes: 0,
  };

  input.value = "";

  NARANJITOS.push(naranjito);

  const newArray = [naranjito];

  printNaranjitos(newArray);
};

const pageLogin = () => {
  const modal = document.createElement("div");
  const img = document.createElement("img");
  const formLogin = document.createElement("form");
  const inputUserName = document.createElement("input");
  const inputPassword = document.createElement("input");
  const buttonLogin = document.createElement("button");

  modal.className = "login-page";
  img.src = "./assets/logo.png";
  formLogin.className = "form-login";
  inputUserName.placeholder = "Paquito";
  inputPassword.type = "password";
  inputPassword.placeholder = "**********";
  buttonLogin.textContent = "Login";
  /* buttonLogin.type = "sumbit"; */

  formLogin.addEventListener("submit", (e) =>
    login(e, inputUserName, inputPassword, modal, formLogin)
  );

  formLogin.appendChild(inputUserName);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(buttonLogin);
  modal.appendChild(img);
  modal.appendChild(formLogin);
  document.body.appendChild(modal);
};

const login = (e, userNameInput, passwordInput, modal, formLogin) => {
  // el evento submit me va a provocar una recarga de la página pero nosotros queremos evitarlo

  //! el método preventDefault de un evento me va a permitir NO realizar el comportamiento por defecto que tenga el evento de manera implícita
  e.preventDefault();

  // se que para loguear un usuario en nuestra API necesitaré formular una petición POST y le necesito enviar un objeto stringifeado del nombre y la password, además en la petición voy a tener que indicar el tipo de contenido que le estoy enviando

  fetch("https://users-api-mu.vercel.app/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({
      nombre: userNameInput.value,
      password: passwordInput.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      // información de la respuesta al fetch
      if (res.status === 400) {
        const error = document.createElement("p");
        error.textContent = "Usuario o contraseña incorrectos";
        formLogin.insertBefore(error, userNameInput);
      }
      return res.json();
    })
    .then((res) => {
      // la información procesada
      // el login ha sido satisfactorio
      if (res !== "Usuario no encontrado") {
        USER = { ...res };
        modal.remove();
        printPublicar();
        getUsers();
      }
    });
};

const init = () => {
  if (!USER) {
    pageLogin();
  } else {
    printPublicar();
    printNaranjitos(NARANJITOS);
  }
};

const getUsers = () => {
  fetch("https://users-api-mu.vercel.app/api/v1/users")
    .then((res) => res.json())
    .then((users) => getNaranjitos(users));
};

const getNaranjitos = (users) => {
  NARANJITOS = [
    {
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis amet perspiciatis quo fugiat ut voluptatem iure. Alias praesentium reprehenderit facilis accusamus numquam ipsa? Asperiores voluptate quaerat eius ullam molestiae?",
      usuario: users[0],
      comentarios: [
        {
          texto: "¡Excelente tweet!",
          usuario: users[1],
        },
        {
          texto: "¿Puedes creerlo?",
          usuario: users[2],
        },
      ],
      likes: 20,
    },
    {
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis amet perspiciatis quo fugiat ut voluptatem iure. Alias praesentium reprehenderit facilis accusamus numquam ipsa? Asperiores voluptate quaerat eius ullam molestiae?",
      usuario: users[3],
      comentarios: [
        {
          texto: "¡Me encanta este contenido!",
          usuario: users[4],
        },
        {
          texto: "¿Dónde puedo obtener más información?",
          usuario: users[5],
        },
      ],
      likes: 15,
    },
  ];

  printNaranjitos(NARANJITOS);
};

init();