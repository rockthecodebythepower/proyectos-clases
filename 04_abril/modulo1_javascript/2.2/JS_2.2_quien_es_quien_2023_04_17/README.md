# PARTIENDO DE ESTE HTML 

  <body>
    <h2 class="b-clues">Clues: <span id="clueCount">0</span></h2>
    <div id="boardGame" class="b-board-game"></div>
    <div id="questions" class="b-questions"></div>
  </body>


# PARTIENDO DE ESTE CSS

.b-board-game {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.b-board-game img {
    width: 100px;
    cursor: pointer;
    margin: 10px;
}

.b-questions {
    display: flex;
    flex-direction: column;
    border: 6px solid #FE4F60;
    border-radius: 10px;
    padding: 24px;
}

.b-clues {
    width: 100%;
    text-align: center;
}

.b-questions h2, h2 {
    font-family: Arial;
    color: #333333
}

.b-questions button {
    border-radius: 10px;
    width: 200px;
    padding: 10px;
    background-color: #FE4F60;
    color: #FFFFFF;
    border: 0;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

# PARTIENDO DE ESTE JAVASCRIPT

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
    }
]

// simplificado -> todas las personas


const questionsType = [
    {
        title: "Gender",
        key: "gender",
        questions: ["Man", "Woman"],
    }
]

// simplificado -> todas las preguntas con sus posibles respuestas

let CLUES = 0;

let PERSONASRESTANTES = [...persons];


## SE PIDE CREAR EL JUEGO DE QUIEN ES QUIEN DONDE SE ELIJA DE MANERA ALEATORIA UNA PERSONA, EL USUARIO, RESPONDA A LAS PREGUNTAS CLICKANDO EN LA RESPUESTA, ESTA RESPUESTA SE ANALIZARÁ Y SE COMPROBARÁ SI ES ACERTADA O NO.

## PASO 1: pintar todas las personas

const pintarPersonas = (personas) => {

  const boardGame$$ = document.querySelector("#boardGame");

  boardGame$$.innerHTML = "";

  for (const persona of personas) {

    const imagen$$ = document.createElement("img");

    imagen$$.src = persona.img;

    boardGame$$.appendChild(imagen$$);
  }
};

pintarPersonas();

## PASO 2: pintar todas las preguntas con sus respuestas

const pintarPreguntas = (preguntas) => {

  const questions$$ = document.querySelector("#questions");

  for (const pregunta of preguntas) {

    const pregunta$$ = document.createElement("h2");

    pregunta$$.textContent = pregunta.title;

    questions$$.appendChild(pregunta$$);

    const divButtons$$ = document.createElement("div");

    divButtons$$.className = "botones";

    pregunta.questions.forEach((respuesta) => {

      const button$$ = document.createElement("button");

      button$$.textContent = respuesta;

      divButtons$$.appendChild(button$$);
    });

    questions$$.appendChild(divButtons$$);
  }
};

pintarPreguntas();

maquetamos los botones en el CSS

.botones {
    display: flex;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
}


## PASO 3: seleccionar la persona de manera aleatoria

const PERSONA = persons[Math.round(Math.random() * persons.length)];


## PASO 4: darle funcionalidad a los botones de las respuestas

DENTRO DEL BUCLE DONDE ESTOY PINTANDO TODOS MIS BOTONES (PASO 2)

button$$.addEventListener("click", (e) => responder(e.target, pregunta.key, respuesta));


## PASO 5: crear la función de responder

const responder = (button$$, pregunta, respuesta) => {
  button$$.style.opacity = 0.5;

  if (PERSONA[pregunta] === respuesta) {
    button$$.style.border = "solid 3px green";

    const speach = new SpeechSynthesisUtterance(`Has acertado!`);
    speechSynthesis.speak(speach);

  } else {
    button$$.style.border = "solid 3px black";

    const speach = new SpeechSynthesisUtterance(`Has fallado!`);
    speechSynthesis.speak(speach);

  }

  PERSONASRESTANTES = PERSONASRESTANTES.filter((persona) => {
    if (PERSONA[pregunta] === respuesta && persona[pregunta] === respuesta) {
      return persona;
    }

    if (PERSONA[pregunta] !== respuesta && persona[pregunta] !== respuesta) {
      return persona;
    }
  });

  pintarPersonas(persons);
};


## PASO 6: darle funcionalidad a las imágenes de las personas para poder comprobar//* PASO 6 -> comprobar si en mi array de personas incluyo o no a la persona que estoy pintando en este momento, si no se incluye la habré eliminado y por lo tanto tendrá poca opacidad

EN LA FUNCIÓN PINTAR PERSONAS

if (!PERSONASRESTANTES.includes(persona)) {
      imagen$$.style.opacity = 0.5;
    } else {
      imagen$$.addEventListener("click", () => comprobar(persona));
}



## PASO 7: Por último tendría que comprobar si la persona que estoy clickando es la aleatoria que había elegido mi ordenador, que es ejecutada al hacer click en la imagen (vease paso 6)

const comprobar = (persona) => {
  if (persona.img === PERSONA.img) {
    alert("HAS GANADO!");
  } else {
    const clue$$ = document.querySelector("#clueCount");

    CLUES++;

    PERSONASRESTANTES.splice(PERSONASRESTANTES.indexOf(persona), 1);

    clue$$.textContent = CLUES;

    pintarPersonas(persons);
  }
};