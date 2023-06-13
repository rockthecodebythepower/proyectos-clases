const getCharacters = async () => {

  const aleatorio = Math.floor(Math.random() * 42 + 1);

  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=" + aleatorio
  );

  const respuesta = await response.json();

  respuesta.results.splice(6);

  pintarPersonajes(respuesta.results);
  añadirContador(respuesta.info.count);
};

const añadirContador = (contador) => {

    const hero$$ = document.querySelector("#hero");

    hero$$.innerHTML = `<p>personajes totales: ${contador}</p>`

}

const pintarPersonajes = (personajes) => {

    const characters$$ = document.querySelector("#characters");

    for (const personaje of personajes) {
     
        characters$$.innerHTML += `
            <div class="character">
                <div class="div_img">
                    <img src="${personaje.image}"/>
                </div>
                <div class="info">
                    <div>
                        <a href="https://rickandmortyapi.com/api/character/${personaje.id}">
                            <h2>${personaje.name}</h2>
                        </a>
                        <div class="status">
                            <p>${personaje.status} - ${personaje.species}</p>
                        </div>
                    </div>
                    <div>
                        <p class="texto">Last known location:</p>
                        <a href="${personaje.location.url}">
                            <p>${personaje.location.name}</p>
                        </a>
                    </div>
                    <div>
                        <p class="texto">Origin:</p>
                        <a href="${personaje.origin.url === "unknown" ? '#' : personaje.origin.url}">
                            <p>${personaje.origin.name}</p>
                        </a>
                    </div>
                </div>
            </div>
        `

    }

}


getCharacters();