// 10 -> backend / frontend
import "./style.css";
import { Button } from "./src/components/Button/Button";
import { Flex } from "./src/components/Flex/Flex";

// componente -> un componente es función, que genera contenido de DOM
// función -> una función que me cubre cierta funcionalidad
// página -> lo mismo que un componente, pero por si mismo conforma todo el visual de la página
// datos -> variables con datos -> arrays de objetos
// services -> peticiones - getColecciones - posts...

const funcionPrueba = () => {
  console.log("Esto es una prueba");
};

Button({
  text: "Esto es texto",
  parentElement: document.body,
  funct: funcionPrueba,
  rightIcon: "<img src='/assets/icons/arrow_white.png'/>",
});

Button({
  text: "Esto es texto",
  parentElement: document.body,
  size: "m",
  funct: () => console.log("holaaaaaaaa"),
});

Button({
  text: "Esto es texto",
  parentElement: document.body,
  size: "s",
  funct: () => console.log("adioooooooooos"),
});

const div = document.createElement("div");
document.body.append(div);

Button({ parentElement: div, text: "L size", className: "medium" });

Button({
  parentElement: div,
  text: "M size",
  className: "medium",
  size: "m",
  rightIcon: "<img src='/assets/icons/arrow_black.png'/>",
});

Button({
  parentElement: div,
  text: "S size",
  className: "medium",
  size: "s",
  leftIcon: "<img src='/assets/icons/arrow_black.png'/>",
});

Button({
  parentElement: div,
  text: "Botón de prioridad baja",
  className: "low",
});

const div2 = document.createElement("div");
div2.classList.add("div2");
document.body.append(div2);

Button({
  text: "Nuevo ticket",
  parentElement: div2,
  funct: () => {
    console.log("Nuevo ticket creado");
  },
});

Button({
  text: "Mis tickets",
  parentElement: div2,
  className: "medium",
  funct: () => {
    console.log("Ahora vemos nuestros tickets");
  },
});




document.body.innerHTML += Flex({ children: `<p>hola</p> <p>Adios</p>`});

console.log(Flex(`<p>hola</p> <p>Adios</p>`));
