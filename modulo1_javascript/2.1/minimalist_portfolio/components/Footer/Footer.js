import "./Footer.css";
import { Mail } from "../Mail/Mail";

const template = () => {
  return `
    <h2><span>✦</span>Get in touch<span>✦</span></h2>
    ${Mail("walterwhite@gmail.com")}
    `;
};

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
