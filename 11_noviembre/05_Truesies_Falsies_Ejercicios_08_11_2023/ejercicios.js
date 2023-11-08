// estamos en un proyecto y tenemos un input donde le estamos pidiendo al usuario de la página que me indique cuantos elementos del array debo eliminar

const allDivs = document.querySelectorAll("div");

const [frutasHTML, bebidasHTML, juegosHTML] = allDivs;

for (const div of allDivs) {
  div.style.margin = "50px";
}

const frutas = ["mango", "fresa", "naranja", "pomelo"];
const bebidas = ["agua", "leche", "coca-cola"];
const juegos = [
  "The last of us",
  "The binding of isaac",
  "fifa",
  "Zelda Breath of the Wild",
  "Mario Party",
];

const quitarElementos = (array, cantidad) => {
  if (!cantidad) {
    alert("No puedo cortar 0 elementos, selecciona una cantidad superior");
  }

  for (let i = 0; i < Math.abs(cantidad); i++) {
    array.pop();
  }
};

const createSection = (array, texto = "", nodoPadre = document.body) => {
  nodoPadre.innerHTML = "";

  if (!array) {
    return;
  }

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = texto;
  nodoPadre.appendChild(input);

  // blur es un evento que me permite controlar cuando un elemento pierde el focus
  input.addEventListener("blur", (evento) => {
    quitarElementos(array, parseInt(evento.target.value));
    createSection(array, texto, nodoPadre);
  });

  for (const element of array) {
    const p = document.createElement("p");
    p.textContent = element;
    nodoPadre.appendChild(p);
  }
};

createSection(frutas, "Frutas", frutasHTML);
createSection(bebidas, "Bebidas", bebidasHTML);
createSection(juegos, "Juegos", juegosHTML);