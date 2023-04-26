const questionsType = [
  {
    title: "Gender",
    key: "gender",
    questions: ["Man", "Woman"],
  },
  {
    title: "Hair Color",
    key: "hairColor",
    questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
  },
  {
    title: "Moustache",
    key: "moustache",
    questions: ["Yes", "No"],
  },
  {
    title: "Glasses",
    key: "glasses",
    questions: ["Yes", "No"],
  },
  {
    title: "Hat or Cap",
    key: "hatOrCap",
    questions: ["Yes", "No"],
  },
  {
    title: "Clothes color",
    key: "clothesColor",
    questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
  },
  {
    title: "Skin color",
    key: "skinColor",
    questions: ["Light", "Dark"],
  },
  {
    title: "Long Hair",
    key: "longHair",
    questions: ["Yes", "No"],
  },
];

const persons = [
  {
    img: "public/assets/001-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/002-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/003-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/004-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/005-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/006-man.svg",
    gender: "Man",
    hairColor: "Brown",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/007-man.svg",
    gender: "Man",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/008-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/009-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/010-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/011-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/012-woman.svg",
    gender: "Woman",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/013-woman.svg",
    gender: "Woman",
    hairColor: "White",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/014-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/015-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/016-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/017-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/018-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/019-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/020-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/021-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/022-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/023-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/024-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/025-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/026-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/027-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/028-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/029-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/030-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/assets/031-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/032-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/033-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/034-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/assets/035-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/036-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/037-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/038-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/039-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/040-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/041-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/042-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/043-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/assets/044-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/assets/045-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
];

//* PASO 3
//? Nos creamos la variable PERSONA con la persona aleatoria seleccionada -> persons[numeroAleatorio] -> este número aleatoria surge a través del Math.random() -> si lo multiplicamos por la longitud de mi array nos dará un número aleatorio decimal de entre 0 y la longitud de mi array, con el Math.round redondeamos ese número para quedarnos con un valor entero (4); -> persons[4];
const PERSONA = persons[Math.round(Math.random() * persons.length)];

//! creo la variable intentos
let CLUES = 0;

//! creo la variable personas restantes
let PERSONASRESTANTES = [...persons];

//* PASO 1 -> DECLARO LA FUNCIÓN PINTARPERSONAS
const pintarPersonas = (personas) => {
  //? seleccionamos el array donde vamos a pintar todas nuestras personas
  const boardGame$$ = document.querySelector("#boardGame");

  //? lo limpiamos por si ya hay contenido
  boardGame$$.innerHTML = "";

  //! como mi array personas es un ARRAY tendré que entrar en cada elemento para poder acceder a las propiedades respectivas de cada objeto, cada persona
  for (const persona of personas) {
    //? creamos una imagen para cada persona
    const imagen$$ = document.createElement("img");

    //? su src será la imagen de la persona
    imagen$$.src = persona.img;

    //* PASO 6 -> comprobar si en mi array de personas incluyo o no a la persona que estoy pintando en este momento, si no se incluye la habré eliminado y por lo tanto tendrá poca opacidad
    if (!PERSONASRESTANTES.includes(persona)) {
      imagen$$.style.opacity = 0.5;
    } else {
      imagen$$.addEventListener("click", () => comprobar(persona));
    }

    //? meter las imágenes en el div
    boardGame$$.appendChild(imagen$$);
  }
};

//* PASO 2 -> DECLARO LA FUNCIÓN PINTARPREGUNTAS
const pintarPreguntas = (preguntas) => {
  //? Seleccionamos el div donde queremos pintar nuestras preguntas
  const questions$$ = document.querySelector("#questions");

  //? recorremos nuestro array de preguntas para poder acceder a las propiedades de cada pregunta
  for (const pregunta of preguntas) {

    //? creamos un h2 para el título de cada pregunta
    const pregunta$$ = document.createElement("h2");

    //? le damos el contenido de texto que será el título de la pregunta -> pregunta.title
    pregunta$$.textContent = pregunta.title;

    //? metemos la pregunta dentro del div previamente seleccionado
    questions$$.appendChild(pregunta$$);

    //? crearemos un div para meter todas las respuestas de cada pregunta
    const divButtons$$ = document.createElement("div");

    //? le doy una clase
    divButtons$$.className = "botones";

    //! recorro mi array de pregunta.questions que será donde tengo las respuestas
    pregunta.questions.forEach((respuesta) => {

        //? Creo un botón por cada respuesta
      const button$$ = document.createElement("button");

      //? le doy un contenido de texto, la respuesta
      button$$.textContent = respuesta;

      //* PASO 4 -> DARLE FUNCIONALIDAD A LOS BOTONES
      //? le añado al botón un escuchador de eventos para que cada vez que yo pinche en un botón me llame a la función responder() envíando por parámetros tanto el botón que he clickado, como la clave de la pregunta y la respuesta
      button$$.addEventListener("click", (e) =>
        responder(e.target, pregunta.key, respuesta)
      );

      //? metemos cada respuesta en el array de divButtons$$ que hemos creado arriba
      divButtons$$.appendChild(button$$);
    });

    //? meteremos en el div de todas cada pregunta el div con las respuestas
    questions$$.appendChild(divButtons$$);
  }
};

const responder = (button$$, pregunta, respuesta) => {

    //! le cambiamos la opacidad al botón que hemos elegido
  button$$.style.opacity = 0.5;

  //! comprobamos si la persona escogida por azar su propiedad de la pregunta (gender) es igual a la respuesta aportada (woman)
  if (PERSONA[pregunta] === respuesta) {

    //? de ser así le ponemos este borde y nos dirá la aplicación que hemos acertado
    button$$.style.border = "solid 3px green";

    const speach = new SpeechSynthesisUtterance(`Has acertado!`);
    speechSynthesis.speak(speach);

  } else {
    //? de ser así le ponemos este otro borde y nos dirá la aplicación que hemos fallado
    button$$.style.border = "solid 3px black";

    const speach = new SpeechSynthesisUtterance(`Has fallado!`);
    speechSynthesis.speak(speach);

  }

  //! nuestro array previamente creado de personas restantes filtrará cuando las personas cumplan con los requisitos (nunca quitar la persona que estamos buscando)
  PERSONASRESTANTES = PERSONASRESTANTES.filter((persona) => {
    if (PERSONA[pregunta] === respuesta && persona[pregunta] === respuesta) {
      return persona;
    }

    if (PERSONA[pregunta] !== respuesta && persona[pregunta] !== respuesta) {
      return persona;
    }
  });

  //! repintamos las personas
  pintarPersonas(persons);
};

const comprobar = (persona) => {

    //? COMPRUEBO SI LA IMAGEN DE LA PERSONA ELEGIDA AL AZAR ES IGUAL A LA IMAGEN ESCOGIDA POR EL USUARIO HACIENDO CLICK
  if (persona.img === PERSONA.img) {
    alert("HAS GANADO!");
  } else {

    //! si no he ganado selecciono el span de los intentos
    const clue$$ = document.querySelector("#clueCount");

    //! le sumo 1 a mis intentos
    CLUES++;

    //! elimino la persona del array personasRestantes para que no le pueda volver a dar
    PERSONASRESTANTES.splice(PERSONASRESTANTES.indexOf(persona), 1);

    //? le cambio el contenido de texto al span para actualizar el número de intentos
    clue$$.textContent = CLUES;

    //! repinto a las personas
    pintarPersonas(persons);
  }
};

//* PASO 1 -> EJECUTO LA FUNCIÓN DE PINTARPERSONAS
pintarPersonas(persons);

//* PASO 2 -> EJECUTO LA FUNCIÓN PINTARPREGUNTAS
pintarPreguntas(questionsType);

//! MANERAS DE RECORRER ARRAYS

//? BUCLE FOR -> SIMPLEMENTE RECORRE EL ARRAY

//? BUCLE FOROF -> SIMPLEMENTE RECORRE EL ARRAY

//? BUCLE FOREACH -> SIMPLEMENTE RECORRE EL ARRAY

//? FILTER -> ME SIRVE PARA FILTRAR UN ARRAY Y DEJARLO MÁS VACÍO Y QUE CUMPLA UNA FUNCIÓN

//? MAP -> ME DEVUELVE UN NUEVO ARRAY CON LAS CONDICIONES O COSAS QUE LE HAYAMOS PUESTO POR DENTRO AL MAP

//? FIND -> ENCONTRAR UN ELEMENTO
