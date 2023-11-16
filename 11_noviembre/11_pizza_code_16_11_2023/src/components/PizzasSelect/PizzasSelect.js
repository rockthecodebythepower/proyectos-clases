import { pizzas } from "../../data/pizzas";
import { CookPizza } from "../CookPizza/CookPizza";
import { printSection } from "../PizzasSection/PizzasSection";
import "./PizzasSelect.css";

export const printPizzasSelect = (pizzasSection, pizzaTabla) => {
  const divApp = document.querySelector("#app");
  const divPizzas = document.createElement("div");
  divPizzas.className = "divPizzas";

  for (const pizza of pizzas) {
    const div = document.createElement("div");
    div.className = "div-pizza";

    div.addEventListener("click", () => {
      const allDivsPizza = document.querySelectorAll(".div-pizza");
      
      for (const divPizza of allDivsPizza) {
        if (divPizza.classList.value.includes("seleccionado")) {
          divPizza.classList.remove("seleccionado");
          break;
        }
      }

      CookPizza(pizzaTabla, pizza.img);

      div.classList.add("seleccionado");
      printSection(pizzasSection, pizza);
    });

    div.innerHTML = `<img src="${pizza.img}" alt="${pizza.nombre} class="pizza-seleccionable"/>`;
    divPizzas.appendChild(div);
  }

  divApp.appendChild(divPizzas);
};
