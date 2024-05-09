import { API } from "../../utils/API";
import { createFormAdoption } from "../FormAdoption/FormAdoption";
import "./Cats.css";

export const getCats = async () => {
  const cats = await API({ endpoint: "/cats" });
  printCats(cats);
};

const printCats = (cats) => {
  const app = document.querySelector("#app");
  const divCats = document.createElement("div");
  divCats.classList.add("cats");

  for (const cat of cats) {
    const divCat = document.createElement("div");

    divCat.innerHTML = `
    <h3>${cat.name}</h3>
    <div class="img-wrp">
    <img src="${cat.img}"/>
    </div>
    <div class="info">
    <p>${cat.description}</p>
    <p>Juguete preferido: ${cat.favoriteToy}</p>
    <p>Comida preferida: ${cat.favoriteFood}</p>
    </div>
    <p class="age">${cat.age} meses</p>
    `

    divCat.addEventListener("click", () => createFormAdoption(cat));

    divCats.append(divCat);
  }

  app.append(divCats);
};
