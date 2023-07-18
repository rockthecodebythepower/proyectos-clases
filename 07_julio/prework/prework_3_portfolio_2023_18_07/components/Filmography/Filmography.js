import "./Filmography.css";
import projects from "../../data/data";

const Filmography = () => {
  //Creamos la sección
  const section = document.createElement("section");
  //Le damos una clase
  section.classList.add("filmography");
  //Le añadimos un titulo a la sección
  const title = document.createElement("h2");
  title.innerText = "Filmography";
  title.id = "filmography";
  section.appendChild(title)
  //Creamos una lista vacía
  const list = document.createElement("ul");
  //Recorremos los proyectos y por cada uno de ellos creamos un li y le damos un contenido de HTML
  for (const project of projects) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
  <img src=${project.poster} alt=${project.title} />
  <h3>${project.title}</h3>
  <p>${project.productionCompany}</p>
  <p>${project.year}</p>
  <p>${project.type}</p>
  `;
    //Inyectamos cada uno de estos li en la lista
    list.appendChild(listItem);
  }
  section.appendChild(list);
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(section);
};

export default Filmography;
