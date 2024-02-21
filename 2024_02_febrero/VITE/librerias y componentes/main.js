import { Alert } from "./src/components/Alert/Alert";
import { Button } from "./src/components/Button/Button.js";
import "./style.css";
import Swal from "sweetalert2";

const lanzarAlerta = () => {
  Swal.fire({
    title: "Error!",
    text: "Este es mi texto",
    icon: "error",
    confirmButtonText: "Cool",
  });
};

const app = document.querySelector("#app");

Button({
  text: "Lanzar alerta de librería",
  funcion: lanzarAlerta,
  nodoPadre: app,
});

Button({
  text: "Lanzar alerta nativa",
  funcion: () => Alert({}),
  nodoPadre: app,
});

window.addEventListener("scroll", () =>
  Alert({
    title: "Has hecho scroll",
    text: "Hiciste scroll te he pillado",
    buttonText: "cerrar",
  })
);
