// DOCUMENT       OBJECT        MODEL
// index.html     objetos       modelo
import { alumns } from "./archivo.js";

const divSearch = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

divSearch.classList.add("div-search");
/* divSearch.style.backgroundColor = "blue";
divSearch.style.padding = "20px"; */
/* divSearch.className = "element div-search" */
button.textContent = "Buscar";

document.body.append(divSearch);
divSearch.append(input, button);

const divAlumns = document.createElement("div");
divAlumns.id = "alumns";
document.body.append(divAlumns);

const printAlumns = (array) => {
  divAlumns.innerHTML = "";
  for (const element of array) {
    const div = document.createElement("div");
    const nombre = document.createElement("h3");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const notaFinal = document.createElement("p");

    nombre.textContent = element.nombre;
    img.src = element.imagen;
    notaFinal.textContent = "Nota final: " + element.notaFinal;

    notaFinal.addEventListener("click", () =>
      console.log("hola, me han hecho click, y soy el alumno " + element.nombre)
    );

    divImg.append(img);
    div.append(nombre, divImg, notaFinal);
    divAlumns.append(div);

    /* divAlumns.innerHTML += `
            <div>
                <h3>${element.nombre}</h3>
                <div>
                    <img src="${element.imagen}"/>
                </div>
                <p>Nota final: ${element.notaFinal}</p>
            </div>
        `; */
  }
};

const filtrar = () => {
  printAlumns(alumns.filter((element) => element.notaFinal >= input.value));
};

button.addEventListener("click", filtrar);

printAlumns(alumns);
