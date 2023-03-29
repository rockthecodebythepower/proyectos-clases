import "./Employers.css";
import { employers } from "../../data/data";
import { Avatar } from "../Avatar/Avatar";

const template = () => {
  return `
  <h2>My Employers</h2>
  <div id="employerscontainer"></div>
  `;
};

const listeners = () => {
  const container = document.querySelector("#employerscontainer");
  for (const item of employers) {
    container.innerHTML += Avatar(item);
  }
};

export const printTemplate = () => {
  document.querySelector("#employers").innerHTML = template();
  listeners();
};
