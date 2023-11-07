// pintar productos
export const pintarProductos = (productos) => {
  const productsHTML = document.querySelector("#products");
  productsHTML.innerHTML = "";
  productos.forEach((product) => {
    const { name, sellCount, img } = product;

    const divHTML = document.createElement("div");
    const nameHTML = document.createElement("h3");
    const imgHTML = document.createElement("img");
    const sellCountHTML = document.createElement("p");

    divHTML.classList.add("product");
    nameHTML.textContent = name;
    imgHTML.src = img;
    sellCountHTML.textContent = sellCount;

    divHTML.appendChild(nameHTML);
    divHTML.appendChild(imgHTML);
    divHTML.appendChild(sellCountHTML);
    productsHTML.appendChild(divHTML);
  });
};