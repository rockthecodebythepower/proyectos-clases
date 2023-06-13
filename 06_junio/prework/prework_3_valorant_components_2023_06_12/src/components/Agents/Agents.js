import "./Agents.css";
import { pintarAgente } from "../Agent/Agent";
import { API } from "../../config/API";

export const initAgents = () => {
  getAgents();
};

const getAgents = async () => {

  const respuesta = await API("agents");

  respuesta.splice(8, 1);

  pintarAgentes(respuesta);

};

const pintarAgentes = (agentes) => {
  const main$$ = document.querySelector("main");

  main$$.innerHTML = `
        <h1>Estos son los agentes de Valorant</h1>
        <div class="agentes"></div>
    `;

  const agentes$$ = document.querySelector(".agentes");

  for (const agente of agentes) {
    agentes$$.innerHTML += pintarAgente(agente);
  }
};