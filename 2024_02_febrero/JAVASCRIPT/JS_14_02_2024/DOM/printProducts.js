const divProducts = document.querySelector(".products");

export const printProducts = (xProducts) => {
  divProducts.innerHTML = "";
  for (const producto of xProducts) {
    divProducts.innerHTML += `
            <div class="product">
                <h2>${producto.nombre}</h2>
                <p>${producto.precio} €</p>
                <p>Categoría: ${producto.categoria}</p>
            </div>
        `;
  }
};
