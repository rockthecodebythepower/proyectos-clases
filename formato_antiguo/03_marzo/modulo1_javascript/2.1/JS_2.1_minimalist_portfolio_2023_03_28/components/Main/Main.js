import "./Main.css";

const template = () => {
  return `
    <section id="work"></section>
    <section id="employers"></section>
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
