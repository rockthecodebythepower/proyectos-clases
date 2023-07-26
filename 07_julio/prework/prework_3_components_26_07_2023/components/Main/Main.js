import "./Main.css";
import Hero from "../Hero/Hero";
import Tech from "../Tech/Tech";

const Main = () => {
  const main = document.createElement("main");
  main.innerHTML = `
  ${Hero()}
  ${Tech()}
  `;
  document.body.appendChild(main);
};

export default Main;
