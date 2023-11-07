// pintar el mejor producto
export const pintarMejorProducto = (products) => {
  const bestProductHTML = document.querySelector("#bestProduct");

  //! filter 💔 - filtra y me devuelve un nuevo array filtrado
  //! map 💔 - modifica y me devuelve un nuevo array modificado
  //! find 💔 - encuentra y me devuelve el PRIMER elemento
  //! toSorted 💛 - ordenar y me devuelve un nuevo array ordenado

  const bestProduct = products.toSorted((a, b) => b.sellCount - a.sellCount)[0];

  const { name, img } = bestProduct;

  const divHTML = document.createElement("div");
  const nameHTML = document.createElement("h2");
  const imgHTML = document.createElement("img");
  const star = document.createElement("img");

  divHTML.classList.add("bestProduct");
  nameHTML.textContent = name;
  imgHTML.src = img;
  star.src =
    "https://i.pinimg.com/originals/ce/d2/96/ced296c9d25b9d11e7ac6cfab6610b4e.gif";

  divHTML.appendChild(nameHTML);
  divHTML.appendChild(imgHTML);
  divHTML.appendChild(star);
  bestProductHTML.appendChild(divHTML);
};