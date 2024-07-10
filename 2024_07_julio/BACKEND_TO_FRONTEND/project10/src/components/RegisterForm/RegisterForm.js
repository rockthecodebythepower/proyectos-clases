import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./RegisterForm.css";

export const RegisterForm = (form) => {
    form.className = "register-form";

    form.innerHTML = `
        ${FieldForm({ labelText: "Email", type: "email" })}
        ${FieldForm({ labelText: "Contraseña", type: "password" })}
        ${FieldForm({ labelText: "Nombre" })}
        ${FieldForm({ labelText: "Apellido" })}
    `;

    form.append(Button({ text: "Registrarse" }));
}