const Todos = ({
  todos,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCompleteTodo(todo.id)}
          />
          {todo.completed ? <del>{todo.text}</del> : <p>{todo.text}</p>}
          <button
            onClick={() => {
              handleEditTodo(todo.id, prompt("Edit todo...", todo.text));
            }}
          >
            ✐
          </button>
          <button onClick={() => handleDeleteTodo(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
