import { productos } from "../../data/products";
import { printProducts } from "../Products/Products";
import "./Categories.css";

export const Categories = () => {
  /* cogemos las categorías */
  const categories = getCategories();

  /* pintamos las categorias */
  printCategories(categories);

};

const getCategories = () => {
  const categories = [];

  for (const producto of productos) {
    if (!categories.includes(producto.category)) {
      categories.push(producto.category);
    }
  }

  return categories;
};

const printCategories = (categories) => {
  /* seleccionar el div app */
  const app$$ = document.querySelector("#app");

  /* creamos el div donde van a ir las categorías */
  const categories$$ = document.createElement("ul");

  categories$$.className = "filtros";

  for (const category of categories) {
    const category$$ = document.createElement("li");

    category$$.innerText = category;

    category$$.addEventListener("click", () => filtrar(category))

    /* metiendo cada li dentro del ul */
    categories$$.appendChild(category$$);
  }

  app$$.appendChild(categories$$);
};

const filtrar = (category) => {

    printProducts();

}