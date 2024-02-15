import { printCategorias } from "./categorias.js";
import { printProducts } from "./printProducts.js";
import { productos } from "./products.js";

const select = document.querySelector("select");

printProducts(productos);
printCategorias();

const alCambiarElSelect = () => {
  const productosFiltered = productos.filter(
    (producto) => producto.categoria === select.value
  );
  printProducts(productosFiltered);
  select.removeEventListener("change", alCambiarElSelect);
  select.remove();
};

select.addEventListener("change", alCambiarElSelect);