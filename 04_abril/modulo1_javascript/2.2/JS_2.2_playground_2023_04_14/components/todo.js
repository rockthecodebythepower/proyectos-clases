import "./todo.css"

const template = () => {
  return `
    <h2>TODO List</h2>
    <div>
    <input type="text" id="todoInput" placeholder="Add a TODO..."/>
    <button id="todoBtn">Add</button>
    <ul id="todoList"></ul>
    </div>
    `
}

const addTodo = () => {
  const todo = document.querySelector("#todoInput").value
  if (todo === "") {
    alert("Please, add a todo")
  } else {
    //Recuperamos la lista
    const todoList = document.querySelector("#todoList")
    //Creamos un li vacío
    const listItem = document.createElement("li")
    //Al li vacío le insertamos dentro el texto del todo de input
    listItem.innerHTML = todo
    //Le insertamos a la lista el li con el texto
    todoList.appendChild(listItem)
    //Vaciamos el input
    document.querySelector("#todoInput").value = ""

    //Vamos a añadirle listeners a todos los elementos del documento
    const lis = document.querySelectorAll("li")
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        li.classList.add("completed")
      })
    })
  }
}

const listeners = () => {
  document.querySelector("#todoBtn").addEventListener("click", () => addTodo())
}

export const printTemplate = () => {
  document.querySelector("#todo").innerHTML = template()
  listeners()
}
