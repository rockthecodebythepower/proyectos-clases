import "./Todo.css";

const Todo = ({deleteTodo, todo}) => {
	return (
		<li>
			<p>{todo.name}</p>
			<button onClick={() => deleteTodo(todo)}>Eliminar</button>
		</li>
	);
};

export default Todo;
