import "./TodoList.css";
import Todo from "../Todo/Todo";

const TodoList = ({todolist, deleteTodo}) => {
	return (
		<ul>
			{todolist.length ? (
				todolist.map((todo) => (
					<Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
				))
			) : (
				<h3>Inserta una tarea</h3>
			)}
		</ul>
	);
};

export default TodoList;
