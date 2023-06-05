import "./Main.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

const Main = () => {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const submitForm = (ev) => {
		ev.preventDefault();
		const todo = {
			id: uuidv4(),
			name: inputValue,
		};

		setList([...list, todo]);
		setInputValue("");
	};

	const deleteTodo = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	return (
		<main>
			<Form
				submitForm={submitForm}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<TodoList list={list} deleteTodo={deleteTodo} />
		</main>
	);
};

export default Main;
