import { submitLogin } from "../../API/submitLogin";
import { FieldForm } from "../FieldForm/FieldForm";
import "./Login.css";

export const Login = () => {
    const loginDiv = document.querySelector(".login");

    const imgOpen = document.createElement("img");
    const form = document.createElement("form");
  
    form.innerHTML = `
          ${FieldForm({ labelText: "Nombre de usuario", required: true })}
          ${FieldForm({ labelText: "Contraseña", required: true })}
          <button>Login</button>
      `;
    imgOpen.src = "/assets/arrow.png";
  
    form.addEventListener("submit", submitLogin);
    imgOpen.addEventListener("click", () => 
      loginDiv.classList.toggle("openned")
    );
  
    loginDiv.append(imgOpen);
    loginDiv.append(form);
}