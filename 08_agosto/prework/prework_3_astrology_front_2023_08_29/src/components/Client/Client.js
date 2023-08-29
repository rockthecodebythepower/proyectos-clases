import "./Client.css";
import { prevInfo } from "./PrevInfo/PrevInfo";

export const renderClients = (clientes) => {
  const app$$ = document.querySelector("#app");

  app$$.innerHTML = "";

  for (const cliente of clientes) {
    createClient(cliente, app$$);
  }
};

const createClient = (cliente, padre$$) => {
  prevInfo(cliente, padre$$);
};