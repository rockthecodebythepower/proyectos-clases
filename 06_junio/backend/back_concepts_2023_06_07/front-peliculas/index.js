const getAllCategories = async () => {
  const respuesta = await fetch("http://localhost:3000/categorias");

  const categorias = await respuesta.json();

  crearBotones(categorias);
};

const crearBotones = (categorias) => {
  const botones$$ = document.querySelector("#botones");

  botones$$.innerHTML = "";

  for (const categoria of categorias) {
    const boton$$ = document.createElement("button");

    boton$$.textContent = categoria.replaceAll("_", " ");

    boton$$.id = categoria;

    boton$$.addEventListener("click", peticionFiltrar);

    botones$$.appendChild(boton$$);
  }
};

const peticionFiltrar = async (e) => {
  const body = { categoria: e.target.id };

  const respuesta = await fetch("http://localhost:3000/peliculas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const peliculas = await respuesta.json();

  pintarPeliculas(peliculas);
};

const getAllFilms = async () => {
  const respuesta = await fetch("http://localhost:3000/peliculas");

  const peliculas = await respuesta.json();

  pintarPeliculas(peliculas);
};

const pintarPeliculas = (peliculas) => {
  const peliculas$$ = document.querySelector("#peliculas");

  peliculas$$.innerHTML = "";

  if (!peliculas.length) {
    peliculas$$.innerHTML += `
            <div class="not-found" style="background-image: url('https://www.anipedia.net/images/gifs-animados-mono-saltarin.gif')">
                <h2>No se ha encontrado ninguna película con esa categoría</h2>
            </div>
        `;
  }

  for (const pelicula of peliculas) {
    peliculas$$.innerHTML += `
            <div style="background-image: url('${pelicula.imagen}')" title="${pelicula.duracion}">
                <p>${pelicula.categoria.replaceAll("_", " ")}</p>
            </div>
        `;
  }
};

getAllCategories();
getAllFilms();
