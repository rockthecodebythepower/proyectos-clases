import "./FieldForm.css";

const FieldForm = ({ labelText, type = "text", reference, options }) => {
  return (
    <div>
      <label>{labelText}</label>
      {options ? (
        <select ref={reference}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} ref={reference} />
      )}
    </div>
  );
};

export default FieldForm;
