import { pintarLibros } from "../Home/Home";
import "./Favoritos.css";

export const Favoritos = async () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`http://localhost:3000/api/v1/users/${user._id}`);

  const usuario = await res.json();

  pintarLibros(usuario.favoritos, main);
};
