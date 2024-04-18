//! REUTILIZACIÓN DE CÓDIGO

const students = [
  {
    name: "Juanma",
    score: 7,
  }, // 0
  {
    name: "Javier",
    score: 3,
  }, // 1
  {
    name: "Pablo",
    score: 2,
  }, // 2
  {
    name: "Maria",
    score: 9,
  },
  {
    name: "Norma",
    score: 0,
  },
];

const students2 = [
  {
    name: "Daniele",
    score: 7,
  }, // 0
  {
    name: "David",
    score: 3,
  }, // 1
  {
    name: "Aurora",
    score: 2,
  }, // 2
];

// quiero saber cual es la letra que más se repite entre los nombres de todos nuestros estudiantes;
console.log(getMaxLetter(students));

function getMaxLetter(listado) {
  const cont = {};

  for (const student of listado) {
    for (const letter of student.name) {
      if (cont[letter.toLowerCase()]) {
        cont[letter.toLowerCase()]++;
      } else {
        cont[letter.toLowerCase()] = 1;
      }
    }
  }

  let max = {};

  for (const key in cont) {
    if (
      parseInt(max.max?.split(" ")[1]) < cont[key] ||
      !parseInt(max.max?.split(" ")[1])
    ) {
      max.max = `${key} ${cont[key]}`;
    }
  }
  return max.max;
}

console.log(getMaxLetter(students2));

//? DIFÍCIL
// desarrollar una funcionalidad desde 0
// mejorar ese desarrollo y hacerlo reutilizable
// aplicarlo

//? FÁCIL
// copiar y pegar
// ver videos / leer contenido

const createForm = () => {
  const form = document.createElement("form"); // genera una etiqueta form de HTML
  const button = document.createElement("button");
  const send = document.createElement("button");

  button.textContent = "Crear nuevo estudiante";
  send.textContent = "Enviar";
  form.classList.add("formulario"); // añade la clase formulario al elemento form

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // no me recarga la página

    const studentsUser = [];

    for (let i = 1; i < e.target.length; i = i + 2) {
        const objeto = {
            name: e.target[i].value,
            score: parseInt(e.target[i + 1].value)
        };

        studentsUser.push(objeto);
    }

    console.log(getMaxLetter(studentsUser))
  })

  form.append(send);
  button.addEventListener("click", () => crearCampo(form));
  document.body.append(form); // inyectar esa etiqueta formulario dentro del body de mi página
  document.body.append(button);
};

const crearCampo = (form) => {
  form.innerHTML += `
    <div>
        <div>
            <label>Nombre del estudiante</label>
            <input/>
        </div>
        <div>
            <label>Score</label>
            <input type="number"/>
        </div>
    </div>
    `;
};

createForm();