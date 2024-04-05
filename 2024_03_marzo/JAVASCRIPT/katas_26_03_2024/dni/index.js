const LETRAS = [
  "T", // 0
  "R", // 1
  "W", // 2
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E", // 22
];

const input = document.querySelector("input"); // coger el input
const boton = document.querySelector("button"); // coger el botón

const calcularDNI = () => {
  const DNI = parseInt(input.value);

  const RESTO = DNI % 23;

  const elemento = document.createElement("h3");

  elemento.textContent = DNI + LETRAS[RESTO];

  document.body.append(elemento);
};

boton.addEventListener("click", calcularDNI); // controlar cuando un usuario hace click en el botón
