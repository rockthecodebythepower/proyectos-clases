import "./Form.css";

const Form = ({submitForm, inputValue, setInputValue}) => {
	return (
		<form onSubmit={submitForm}>
			<input
				type="text"
				value={inputValue}
				onInput={(ev) => setInputValue(ev.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default Form;
