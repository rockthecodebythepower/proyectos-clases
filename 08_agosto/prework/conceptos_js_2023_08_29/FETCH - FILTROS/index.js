let CHARACTERS = [];
let CHARACTERSFILTERED = [];

// resumen para los que no lo hayan visto -> le estoy pidiendo a otro ordenador unos datos que no tengo, para poder usarlos
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => {
    CHARACTERS = res.results;
    CHARACTERSFILTERED = [...res.results];
    pintarPersonajes(CHARACTERS);
  });

const pintarPersonajes = (personajes) => {
  const miDiv$$ = document.querySelector("#personajes");

  miDiv$$.innerHTML = "";

  if (personajes.length === 0) {
    miDiv$$.innerHTML += `
            <div>
                <h2>NO SE ENCUENTRAN PERSONAJES CON ESAS CARACTERÍSTICAS</h2>
            </div>
        `;
  }

  for (const personaje of personajes) {
    console.log(personaje);
    miDiv$$.innerHTML += `
            <div class="personaje">
                <img src="${personaje.image}"/>
                <h2>${personaje.name}</h2>
            </div>
        `;
  }
};

const inputNombre$$ = document.querySelector("#nombre");

const filtrarByName = (e) => {
  // el valor del input
  // e.target.value

  /* for (const character of CHARACTERS) {
    if (character.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        CHARACTERSFILTERED.push(character)
    }
  } */

  CHARACTERSFILTERED = CHARACTERSFILTERED.filter((character) =>
    character.name.toLowerCase().includes(e.target.value.toLowerCase())
  );

  pintarPersonajes(CHARACTERSFILTERED);
};

inputNombre$$.addEventListener("input", filtrarByName);

const select$$ = document.querySelector("#status");

const filterByStatus = (e) => {
  // el valor del input
  // e.target.value

  CHARACTERSFILTERED = CHARACTERSFILTERED.filter((character) => {
    if (e.target.value === "All") { // = = = 
      return character;
    } else if (character.status === e.target.value) {
      return character;
    }
  });

  pintarPersonajes(CHARACTERSFILTERED);
};

select$$.addEventListener("change", filterByStatus);

const button$$ = document.querySelector("#limpiar");

const limpiarFiltros = () => {
  CHARACTERSFILTERED = [...CHARACTERS];

  pintarPersonajes(CHARACTERSFILTERED);

  inputNombre$$.value = "";

  select$$.value = "All";
};

button$$.addEventListener("click", limpiarFiltros);
