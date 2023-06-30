import { productos } from "../../data/products";
import { addEvents, printProduct } from "../Product/Product";
import "./Products.css";

export const Products = () => {
  const app$$ = document.querySelector("#app");

  const main$$ = document.createElement("main");

  app$$.appendChild(main$$);

  printProducts(productos);
};

export const printProducts = (products) => {
  const main$$ = document.querySelector("main");

  main$$.innerHTML = "";

  for (const product of products) {
    main$$.innerHTML += printProduct(product);
  }

  addEvents()
};
