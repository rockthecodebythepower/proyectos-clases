import "./FieldForm.css";

export const FieldForm = ({ labelText, type = "text" }) => {
  return `
    <div class="fieldForm">
        <label>${labelText}</label>
        <input type="${type}" required/>
    </div>`;
};
