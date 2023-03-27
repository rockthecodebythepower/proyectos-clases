const Form = ({ handleSubmit, inputValue, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write your todo..."
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default Form;
