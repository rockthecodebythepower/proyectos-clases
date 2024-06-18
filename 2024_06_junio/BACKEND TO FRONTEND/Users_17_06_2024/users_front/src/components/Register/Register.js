import { submitRegister } from "../../API/submitRegister";
import { FieldForm } from "../FieldForm/FieldForm";
import "./Register.css";

export const Register = () => {
  const registerDiv = document.querySelector(".register");

  const imgOpen = document.createElement("img");
  const form = document.createElement("form");

  form.innerHTML = `
        ${FieldForm({ labelText: "Nombre de usuario" })}
        ${FieldForm({ labelText: "Email" })}
        ${FieldForm({ labelText: "Frase que te defina" })}
        ${FieldForm({ labelText: "Imagen de perfil", inputType: "file" })}
        ${FieldForm({ labelText: "Contraseña" })}
        <button>Registrarse</button>
    `;
  imgOpen.src = "/assets/arrow.png";

  form.addEventListener("submit", submitRegister);
  imgOpen.addEventListener("click", () => 
    registerDiv.classList.toggle("openned")
  );

  registerDiv.append(imgOpen);
  registerDiv.append(form);
};
