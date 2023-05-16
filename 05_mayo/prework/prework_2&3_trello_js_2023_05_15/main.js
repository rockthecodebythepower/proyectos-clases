import { addList } from "./src/components/AddList/AddList";
import { createList } from "./src/components/List/List";
import { listsData } from "./src/data/listsData";
import "./style.css";

let findTask;

//! declaración de la función
export const initApp = () => {
  const lists$$ = document.querySelector("#lists");

  lists$$.innerHTML = "";

  for (const list of listsData) {
    createList(list);
  }

  addList();
  addEvents();
};

const dragStart = (e) => {
  e.stopPropagation();

  e.dataTransfer.setData("text/plain", e.target.id);

  for (const list of listsData) {
    findTask = list.tasks.find((task) => task.id === e.target.id);
    if (findTask) {
      let posicion = list.tasks.indexOf(findTask);
      list.tasks.splice(posicion, 1);
      break;
    }
  }

  if (!findTask) {
    for (const list of listsData) {
      for (const task of list.tasks) {
        if (task.tasks) {
          findTask = task.tasks.find((t) => t.id === e.target.id);
          if (findTask) {
            let posicion = task.tasks.indexOf(findTask);
            task.tasks.splice(posicion, 1);
            break;
          }
        }
      }
      if (findTask) {
        break;
      }
    }
  }

  console.log(findTask);
};

const dragOver = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

const drop = (e) => {
  e.stopPropagation();

  let findElement = listsData.find((list) => list.id === e.target.id);

  if (!findElement) {
    for (const list of listsData) {
      findElement = list.tasks.find((task) => task.id === e.target.id);
      if (findElement) {
        break;
      }
    }
  }

  findElement.tasks.push(findTask);

  localStorage.setItem("lists", JSON.stringify(listsData));

  findTask = undefined;

  const draggedElementId = e.dataTransfer.getData("text/plain");

  const element$$ = document.getElementById(draggedElementId);

  e.target.appendChild(element$$);
};

const addEvents = () => {
  const allTasks$$ = document.querySelectorAll(".task");

  for (const task$$ of allTasks$$) {
    task$$.addEventListener("dragstart", dragStart);
  }

  const divsTasks$$ = document.querySelectorAll(".tasks");

  for (const divTask$$ of divsTasks$$) {
    divTask$$.addEventListener("dragover", dragOver);
    divTask$$.addEventListener("drop", drop);
  }
};

//! ejecución de la función
initApp();
