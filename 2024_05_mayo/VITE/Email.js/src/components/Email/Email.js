import "./Email.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { sendEmail } from "../../utils/email/send";

export const Email = () => {
  const emailForm = document.createElement("form");
  emailForm.id = "email-form";
  emailForm.addEventListener("submit", sendEmail);

  emailForm.innerHTML = `
        ${FieldForm({
          labelText: "Email",
          className: "email",
          type: "email",
          placeholder: "example@gmail.com",
        })}
        ${FieldForm({
          labelText: "Asunto",
          className: "subject",
          placeholder: "Quiero saber más",
        })}
        ${FieldForm({
          labelText: "Contenido",
          className: "content",
          placeholder: "Me gustaría informarme sobre las cuotas",
        })}
        <button>Enviar</button>
    `;

  const app = document.querySelector("#app");

  app.innerHTML = "";
  app.append(emailForm);
};