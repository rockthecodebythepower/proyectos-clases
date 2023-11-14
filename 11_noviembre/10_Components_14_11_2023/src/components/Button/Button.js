import "./Button.css";

console.log("Estoy en botón");

export const Button = ({
  texto = "Pon aquí tu texto",
  size = "m",
  importance = "primary",
  suma,
}) => {
  return `<button class="main-button ${size} ${importance}" disabled=${suma >= 7}>${texto}</button>`;
};