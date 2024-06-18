import "./FieldForm.css";

export const FieldForm = ({ labelText, inputType = "text", required = false }) => {
    return `
        <div class="field_form">
            <label>${labelText}</label>
            <input type="${inputType}" required=${required}/>
        </div>
    `
}