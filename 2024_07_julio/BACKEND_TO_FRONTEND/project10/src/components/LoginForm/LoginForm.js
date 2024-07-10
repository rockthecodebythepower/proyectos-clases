import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./LoginForm.css";

export const LoginForm = (form) => {
  form.className = "login-form";

  form.innerHTML = `
        ${FieldForm({ labelText: "Email", type: "email" })}
        ${FieldForm({ labelText: "Contraseña", type: "password" })}
    `;

  form.append(Button({ text: "Login" }));
};
