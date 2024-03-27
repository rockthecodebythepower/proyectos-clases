import "./FormField.css";

export const createFormField = (form, key, type) => {
  const formField = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  formField.classList.add("form_field")
  input.type = type;
  input.id = key;
  label.textContent = key;

  label.style.textTransform = "capitalize";

  form.append(formField);
  formField.append(label);
  formField.append(input);
};
