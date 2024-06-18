import "./FieldForm.css";

const FieldForm = ({ ph, type = "text", labelText, set, value, prop }) => {
  return (
    <div className="field_form">
      {labelText && <label>{labelText}</label>}
      <input
        placeholder={ph}
        type={type}
        onChange={(e) => set({ ...value, [prop]: e.target.value })}
      />
    </div>
  );
};

export default FieldForm;
