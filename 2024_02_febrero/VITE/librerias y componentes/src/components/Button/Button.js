import "./Button.css";

export const Button = ({ text, funcion, nodoPadre }) => {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", funcion);
  nodoPadre.append(button);
};
