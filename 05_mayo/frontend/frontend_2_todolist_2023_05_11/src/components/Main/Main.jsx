import "./Main.css";
import {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

const Main = () => {
	const [inputValue, setInputValue] = useState("");
	//Inicializamos lazy el estado inicial de todolist. Si hay algo en el localStorage en la clave todo, el estado incial de todolist es lo que hay en el localStorage, y si no es un array vacio
	const [todolist, setTodolist] = useState(() => {
		if (localStorage.getItem("todo")) {
			return JSON.parse(localStorage.getItem("todo"));
		} else {
			return [];
		}
	});

	useEffect(() => {
		//El efecto que tiene este componente al renderizarse es almacenar todolist en el localStorage
		localStorage.setItem("todo", JSON.stringify(todolist));
		//Y esta logica se va a volver a lanzar cada vez que el estado de todolist cambie
	}, [todolist]);

	const addTodo = (ev) => {
		//Evitamos que el formulario al hacer submit recargue la página
		ev.preventDefault();
		//Vamos a comprobar si inputValue tiene valor
		if (inputValue === "") {
			alert("Escribe una tarea!");
		} else {
			//Creamos un objeto del todo y le aplicamos un id unico con la libreria uuid
			const todo = {
				id: uuidv4(),
				name: inputValue,
			};
			//Metemos el inputValue en todolist
			setTodolist([...todolist, todo]);
			//Volvemos a setear inputValue a "";
			setInputValue("");
		}
	};

	const deleteTodo = (todo) => {
		//Nos quedamos con todas las tareas gracias a filter menos con la que le entra por argumento, comparando sus id
		const newTodolist = todolist.filter((t) => t.id !== todo.id);
		//La seteamos en su estado
		setTodolist(newTodolist);
	};

	return (
		<main>
			<Form
				addTodo={addTodo}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<TodoList todolist={todolist} deleteTodo={deleteTodo} />
		</main>
	);
};

export default Main;
