import "./Work.css";
import { work } from "../../data/data";
import { Card } from "../Card/Card";

const template = () => {
  return `
    <h2>My work</h2>
    <div id="workcontainer"></div>
    `;
};

const listeners = () => {
  const container = document.querySelector("#workcontainer");
  for (const item of work) {
    container.innerHTML += Card(item);
  }
};

export const printTemplate = () => {
  document.querySelector("#work").innerHTML = template();
  listeners();
};
