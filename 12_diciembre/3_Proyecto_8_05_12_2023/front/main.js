import axios from "axios";
import "./style.css";

const printJuegos = (juegos) => {
  const juegos$$ = document.querySelector("#juegos");
  juegos$$.innerHTML = ""
  for (const juego of juegos) {
    juegos$$.innerHTML += `
        <div class="juego">
            <h3>${juego.nombre}</h3>
            <div>
                <img src="${juego.imagen}">
            </div>
            <p>${juego.precio}€</p>
        </div>
    `;
  }
};

const getJuegos = () => {
  fetch("https://game-steel-gamma.vercel.app/api/v1/juegos")
  .then((res) => res.json())
  .then((juegos) => {
    printJuegos(juegos);
  });
}

getJuegos();

const loginForm = document.querySelector("#login");

const login = (e) => {
  e.preventDefault();

  const objetoEnviar = {
    userName: document.querySelector(".userName").value,
    password: document.querySelector(".password").value,
  };

  axios
    .post(
      "https://game-steel-gamma.vercel.app/api/v1/users/login",
      objetoEnviar
    )
    .then((res) => localStorage.setItem("token", res.data.token));
};

loginForm.addEventListener("submit", login);

const postJuego = document.querySelector("#postJuego");

const publicarJuego = (e) => {
  e.preventDefault();
  const nombre = document.querySelector(".nombre");
  const precio = document.querySelector(".precio");
  const imagen = document.querySelector(".imagen");

  const formData = new FormData();

  formData.append("nombre", nombre.value);
  formData.append("precio", precio.value);
  formData.append("categoria", "aventuras");
  formData.append("imagen", imagen.files[0]);

  axios.post("https://game-steel-gamma.vercel.app/api/v1/juegos", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": localStorage.getItem("token")
    }
  }).then(() => getJuegos());

};

postJuego.addEventListener("submit", publicarJuego);