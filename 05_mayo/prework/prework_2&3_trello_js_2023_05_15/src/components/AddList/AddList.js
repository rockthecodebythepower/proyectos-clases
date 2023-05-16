import { initApp } from "../../../main";
import { listsData } from "../../data/listsData";
import "./AddList.css";

let handleClick;

export const addList = () => {
  const addListToRemove$$ = document.querySelector(".addList");

  if (addListToRemove$$) {
    addListToRemove$$.remove();
  }

  const lists$$ = document.querySelector("#lists");

  const addList$$ = document.createElement("div");
  addList$$.className = "addList";
  lists$$.appendChild(addList$$);

  addList$$.innerHTML = `
        <img src="/assets/plus_white.svg"/>
        <p>Añada otra lista</p>
    `;

    handleClick = () => {
      openFormulario(addList$$, "Añadir lista", "Introduzca el título de la lista...")
    }

  //! añado escuchador de eventos
  addList$$.addEventListener("click", handleClick);
};

export const openFormulario = (divSustituir$$, textoBoton, placeholder, isForList = true) => {
  /* const addList$$ = document.querySelector(".addList"); */

  divSustituir$$.id = "form";

  divSustituir$$.innerHTML = "";

  //? creo los elementos
  const input$$ = document.createElement("input");
  const buttonAccept$$ = document.createElement("button");
  const buttonCancel$$ = document.createElement("button");

  input$$.placeholder = placeholder;
  buttonAccept$$.textContent = textoBoton;
  buttonCancel$$.textContent = "X";

  buttonAccept$$.className = "accept";
  buttonCancel$$.className = "cancel";

  //* añado los elementos dentro del div
  divSustituir$$.appendChild(input$$);
  divSustituir$$.appendChild(buttonAccept$$);
  divSustituir$$.appendChild(buttonCancel$$);

  //! quito el escuchador de eventos
  divSustituir$$.removeEventListener("click", handleClick);

  if (isForList) {
    buttonAccept$$.addEventListener("click", () => createList(input$$.value));
    buttonCancel$$.addEventListener("click", addList);
  } else {
    /* buttonAccept$$.addEventListener("click", () => createTask(input$$.value)); */
    /* buttonCancel$$.addEventListener("click", createList); */
  }
  
};

const createList = (title) => {
  const date = new Date();

  listsData.push({
    id: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    title: title,
    tasks: [],
  });

  localStorage.setItem("lists", JSON.stringify(listsData));

  initApp();
};
