import { CookPizza } from "../../components/CookPizza/CookPizza";
import { printSection } from "../../components/PizzasSection/PizzasSection";
import { printPizzasSelect } from "../../components/PizzasSelect/PizzasSelect";
import { pizzas } from "../../data/pizzas";
import "./Pizzas.css";

export const Pizzas = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";

  const pizzasSection = document.createElement("section");
  pizzasSection.className = "pizzas";
  divApp.appendChild(pizzasSection);

  printSection(pizzasSection, pizzas[0]);

  const pizzaTabla = document.createElement("img");
  pizzaTabla.className = "pizza-tabla";
  divApp.appendChild(pizzaTabla);
  
  CookPizza(pizzaTabla, pizzas[0].img);
  printPizzasSelect(pizzasSection, pizzaTabla);

  const tabla = document.createElement("img");

  tabla.src = "/assets/tabla2.png";
  tabla.className = "tabla";

  divApp.appendChild(tabla);
};