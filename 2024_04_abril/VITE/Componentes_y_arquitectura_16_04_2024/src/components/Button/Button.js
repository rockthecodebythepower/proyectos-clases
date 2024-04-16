import "./Button.css";

export const Button = ({
  text,
  parentElement,
  className = "high",
  size = "l", // size = "l" es un valor que estoy dando por defecto
  funct = () => {},
  loading = false,
  leftIcon,
  rightIcon,
}) => {
  const button = document.createElement("button");

  button.classList.add("button", className, size);

  parentElement.append(button);

  if (loading) {
    // comprobando si es true o false
    // en el caso de que loading sea true
    button.innerHTML = `
        <img src="https://discussions.apple.com/content/attachment/106725040"/>
    `;
    return;
  }

  if (leftIcon) {
    button.innerHTML += leftIcon;
    button.classList.add("leftIcon");
  }

  button.innerHTML += text;

  if (rightIcon) {
    button.innerHTML += rightIcon;
    button.classList.add("rightIcon");
  }

  button.addEventListener("click", funct);
};

// clase estilos ✅
// texto ✅
// icono left ✅
// icono right ✅
// loading ✅
// función que ejecuta ✅
// donde lo uso - elemento padre ✅
// tamaños ✅