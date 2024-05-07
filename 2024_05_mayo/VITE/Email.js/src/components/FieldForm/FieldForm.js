import "./FieldForm.css";

export const FieldForm = ({
  labelText,
  className,
  placeholder,
  type = "text",
}) => {
  return `
    <div>
        <label>${labelText}</label>
        <input class="input-form ${className}" placeholder="${placeholder}" required="true" type="${type}"/>
    </div>
    `;
};
