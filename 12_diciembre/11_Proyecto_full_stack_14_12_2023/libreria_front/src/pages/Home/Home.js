import "./Home.css";

/* http://localhost:3000/api/v1/libros */

export const Home = async () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const res = await fetch("http://localhost:3000/api/v1/libros");

  const libros = await res.json();

  pintarLibros(libros, main);
};

export const pintarLibros = (libros, elementoPadre) => {
  const divLibros = document.createElement("div");
  divLibros.className = "libros";
  for (const libro of libros) {
    const divLibro = document.createElement("div");
    const titulo = document.createElement("h3");
    const caratula = document.createElement("img");
    const info = document.createElement("div");

    const like = document.createElement("img");
    like.className = "like";

    like.addEventListener("click", () => addFavorito(libro._id));

    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.favoritos?.includes(libro._id)) {
        like.src = "/assets/relleno-like.png";
    } else {
        like.src = "/assets/like.png";
    }

    divLibro.className = "libro";
    titulo.textContent = libro.titulo;
    caratula.src = libro.caratula;
    info.innerHTML = `
            <p>${libro.autor}</p>   
            <p>${libro.precio}€</p>
        `;

    divLibro.append(titulo, caratula, info, like);
    divLibros.append(divLibro);
  }

  elementoPadre.append(divLibros);
};

const addFavorito = async (idLibro) => {
  /* http://localhost:3000/api/v1/users/65797dc3338cc01512ae6e9b */
  /* PUT */
  /* authorization */
  /* id del usuario */
  /* añadir el libro a un array dentro de un objeto y pasarlo a JSON.stringify */

  const user = JSON.parse(localStorage.getItem("user"));

  user.favoritos = [...user.favoritos, idLibro];

  const objetoFinal = JSON.stringify({
    favoritos: [idLibro],
  });

  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: objetoFinal
  };

  const res = await fetch(
    `http://localhost:3000/api/v1/users/${user._id}`,
    opciones
  );

  const respuesta = await res.json();

  localStorage.setItem("user", JSON.stringify(user));
  Home();
};
