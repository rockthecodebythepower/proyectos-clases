import "./TodoList.css";
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Todos from "../Todos/Todos";
import { setLocalStorage } from "../../utils/localStorage";

const TodoList = () => {
  //Inicializamos el estado de todos con, si hay algo en localStorage con ello, y si no con un array vacio
  const [todos, setTodos] = useState(() => {
    //Si hay algo en el localStorage en la clave todos...
    if (localStorage.getItem("todos")) {
      //Lo parseamos
      const initialValue = JSON.parse(localStorage.getItem("todos"));
      //Lo retornamos
      return initialValue;
    } else {
      //Y si no, un array vacio
      return [];
    }
  });
  //Inicializamos el estado de inputValue con un string vacio
  const [inputValue, setInputValue] = useState("");

  //1ª función, vamos a recoger el valor del input y setearlo en inputValue
  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  //2ª función, vamos a controlar el submit del formulario.
  const handleSubmit = (ev) => {
    //Quitar el comportamiento por defecto del evento submit -> Recargar
    ev.preventDefault();
    //Si inputValue existe...
    if (inputValue.trim()) {
      //Seteamos los todos con los que tenga anteriormente más uno nuevo, y lo haremos a través de un objeto. El objeto tiene un id con la fecha de creación, el texto con el contenido del inputValue y una clave completed en false inicialmente
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      //Cuando terminemos de setear el todo, vaciamos el inputValue
      setInputValue("");
      //Cuando terminemos de setear los todos, los almacenamos en el localStorage
    }
  };

  //3ª Vamos a cambiar el completed de cada uno de los todos por true o false si asi fuera.
  const handleCompleteTodo = (id) => {
    //Volvemos a setear los todos...
    setTodos(
      todos.map((todo) => {
        //Si el id que le entra por argumento es igual a alguno de los id de los todos...
        if (todo.id === id) {
          //Retornamos el todo original y le cambiamos el "sentido" al booleano de completed
          return { ...todo, completed: !todo.completed };
        }
        //Si no coincide retornamos el todo original
        return todo;
      })
    );
    console.log(todos);
  };

  //4ª función -> borra un todo
  const handleDeleteTodo = (id) => {
    //Vamos a setear de nuevo los todos con los que no coincida su id con el id del argumento
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //5ª función -> editar un todo
  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        //Recorremos los todos, y si coincide el id...
        if (todo.id === id) {
          //Retornamos una copia de toda la información pero modificando la clave text
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    //Seteamos los todos si tienen longitud en el localStorage
    setLocalStorage(todos);
    //En el array de dependencias indicamos que se relance el useEffect siempre y cuando todos cambie
  }, [todos]);

  return (
    <section className="todolist">
      <Form
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleSubmit={handleSubmit}
      />
      <Todos
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </section>
  );
};

export default TodoList;
