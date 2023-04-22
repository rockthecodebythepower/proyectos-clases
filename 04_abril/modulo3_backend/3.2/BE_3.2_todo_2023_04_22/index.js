//Importamos readline
const readline = require("readline")
//Importar fs
const fs = require("fs")

//Creamos una interfaz de lectura (readline interface) para permitir la entrada del usuario desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//Creamos un array vacío con nuestra lista de tareas
let todoList = []

//Creamos una función para agregar elementos al todolist
const addItem = (item) => {
  todoList.push(item)
  console.log(`${item} se ha agregado al todo list!`)
}

//Creamos una función que muestre todos los elementos almacenados de la lista
const showTodoList = () => {
  console.log("Estos son los elementos del todo list:")
  for (const todo of todoList) {
    console.log(`- ${todo}`)
  }
}

//Vamos a crear una función que guarde la lista en un JSON
const saveList = () => {
  const data = JSON.stringify(todoList)
  fs.writeFileSync("todo.json", data)
  console.log("Todo list guardado correctamente!")
}

//Vamos a crear una función para descargar el todo list del json
const loadList = () => {
  try {
    const data = fs.readFileSync("todo.json")
    todoList = JSON.parse(data)
    console.log("Todo list cargado correctamente")
  } catch (error) {
    console.log("No se ha podido cargar tu todo list")
  }
}

//Vamos a crear una función para eliminar un todo de la lista
const delTodo = (name) => {
  const index = todoList.indexOf(name)
  if (index === -1) {
    console.log("No existe este elemento en el todo list")
  } else {
    const deletedItem = todoList.splice(index, 1)
    console.log(`${deletedItem} ha sido borrado de la lista`)
  }
}

//Gracias a readline le podemos preguntar al usuario para que realice una acción u otra
rl.question("¿Quieres cargar tu todo list guardado? (s/n)", (input) => {
  if (input === "s") {
    loadList()
  }
  console.log("'add' -> añadir tarea")
  console.log("'list' -> mostrar todo list")
  console.log("'delete' -> borrar elemento del todo list")
  console.log("'save' -> guardar localmente")
  console.log("'close' -> cerrar")
  rl.prompt()
})
//Esto es lo que dispara el prompt siempre que se vuelva a lanzar
rl.on("line", (input) => {
  if (input === "add") {
    rl.question("Escribe el elemento para agregar a la lista:", (item) => {
      addItem(item)
      rl.prompt()
    })
  } else if (input === "list") {
    showTodoList()
    rl.prompt()
  } else if (input === "save") {
    saveList()
    rl.prompt()
  } else if (input === "delete") {
    rl.question("Escribe el elemento a borrar de la lista:", (item) => {
      delTodo(item)
      rl.prompt()
    })
  } else if (input === "close") {
    rl.close()
  } else {
    console.log("Entrada no valida, por favor intentalo de nuevo")
    rl.prompt()
  }
})

//Al cerrar readline guardamos y nos despedimos
rl.on("close", () => {
  saveList()
  console.log("Hasta luego")
})
