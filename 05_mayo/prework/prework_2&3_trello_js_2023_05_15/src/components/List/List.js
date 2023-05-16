import "./List.css";
import { renderTasks } from "../Task/Task";
import { openFormulario } from "../AddList/AddList";

export const createList = (list) => {
  const lists$$ = document.querySelector("#lists");

  const list$$ = document.createElement("div");
  list$$.className = "list";

  list$$.innerHTML = `
    <div class="title">
        <p>${list.title}</p>
        <img src="/assets/more.svg" class="more"/>
    </div>
    <div class="tasks" id="${list.id}">
        ${renderTasks(list.tasks)}
    </div>
    `;

  lists$$.appendChild(list$$);

  const addTask$$ = document.createElement("div");
  addTask$$.className = "addTask";

  addTask$$.innerHTML = `
    <img src="/assets/plus.svg"/>
    <p>Añada una tarjeta</p>
    `;

  const handleClick = () => {
    console.log("hola");
    openFormulario(
      addTask$$,
      "Añadir tarjeta",
      "Introduzca un título para esta tarjeta..."
    );
    quitarEvento();
  };

  addTask$$.addEventListener("click", handleClick);

  const quitarEvento = () => {
    addTask$$.removeEventListener("click", handleClick);
  }

  list$$.appendChild(addTask$$);
};
