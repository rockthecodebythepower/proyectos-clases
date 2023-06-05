import "./TodoList.css";

const TodoList = ({list, deleteTodo}) => {
	return (
		<section>
			{list.length > 0 ? (
				<ol>
					{list.map((item) => (
						<div key={item.id}>
							<li>{item.name}</li>
							<button onClick={() => deleteTodo(item.id)}>❌</button>
						</div>
					))}
				</ol>
			) : (
				<p>Add a TODO...</p>
			)}
		</section>
	);
};

export default TodoList;
