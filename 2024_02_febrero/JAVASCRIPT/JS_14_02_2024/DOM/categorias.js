import { productos } from "./products.js";

export const printCategorias = () => {
  const select = document.querySelector("select");
  const categorias = [];

  for (const producto of productos) {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  }

  for (const categoria of categorias) {
    /* select.innerHTML += `
            <option value="${categoria}">${categoria}</option>
        `; */

    const option = document.createElement("option");

    option.value = categoria;
    option.textContent = categoria;

    select.append(option);
  }
};
