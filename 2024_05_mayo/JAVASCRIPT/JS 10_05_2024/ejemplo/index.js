// quiero que se vean los productos y que hagamos un carrito de la compra, donde puedas añadir o quitar elementos y su precio se vaya sumando y restando al precio final
// addEventListener
import { products } from "./data.js";

const arraySelected = [];

const divProducts = document.createElement("div");
divProducts.classList.add("products");
document.body.append(divProducts);

const divCart = document.createElement("div");
divCart.classList.add("carrito");
document.body.append(divCart);

const printCart = (array) => {
  divCart.innerHTML = "";

  let suma = 0;

  for (const product of array) {
    const divProduct = document.createElement("div");

    suma += parseFloat(product.price) * parseFloat(product.quantity);

    divProduct.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price} €</p>
        <p>Cantidad: ${product.quantity}</p>
    `;

    divCart.append(divProduct);
  }

  const pFinalPrice = document.createElement("p");

  pFinalPrice.textContent = `Total: ${suma.toFixed(2)} €`;

  divCart.append(pFinalPrice);
};

const addItem = (product) => {
  let productFound = arraySelected.find((p) => p.name === product.name);

  if (productFound) {
    productFound.quantity++;
  } else {
    product.quantity = 1;
    arraySelected.push(product);
  }

  printCart(arraySelected);
};

for (const product of products) {
  const productDiv = document.createElement("div");
  const cart = document.createElement("img");

  cart.src = "./cart.png";

  productDiv.innerHTML = `
        <div class="img_wrp">
            <img src="${product.img}"/>
        </div>
        <div class="info">
            <h3>${product.name}</h3>
            <p>Precio: ${product.price} €</p>
            <p>Descripcion: ${product.description}</p>
        </div>
    `;

  cart.addEventListener("click", () => addItem(product));

  productDiv.append(cart);
  divProducts.append(productDiv);
}
