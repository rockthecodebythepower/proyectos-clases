import "./style.css";
import { renderClients } from "./src/components/Client/Client";

let CLIENTES = [];

const start = () => {
  const app$$ = document.querySelector("#app");

  fetch("https://astrology-back.vercel.app/api/v1/clients")
    .then((res) => res.json())
    .then((res) => {
      CLIENTES = [...res];
      renderClients(CLIENTES);
    });
};

start();