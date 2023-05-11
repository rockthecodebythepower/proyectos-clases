import "./Form.css";

const Form = ({addTodo, inputValue, setInputValue}) => {
	return (
		<form onSubmit={(ev) => addTodo(ev)}>
			<input
				type="text"
				placeholder="Añade una nueva tarea..."
				onInput={(ev) => setInputValue(ev.target.value)}
				value={inputValue}
			/>
			<button>Añadir</button>
		</form>
	);
};

export default Form;
