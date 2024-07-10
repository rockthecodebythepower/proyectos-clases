import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { createPage } from "../../utils/functions/createPage";
import { doLogin } from "../../utils/functions/doLogin";
import { doRegister } from "../../utils/functions/doRegister";
import "./Login.css";

let showLogin = true;

export const Login = () => {
  const div = createPage("login");

  const form = document.createElement("form");

  div.append(
    Button({
      text: "Registrate si no tienes cuenta",
      fnc: () => {
        showLogin = !showLogin;
        showLogin ? LoginForm(form) : RegisterForm(form);
        document.querySelector(".button-toggle").textContent = showLogin
          ? "Registrate si no tienes cuenta"
          : "Vete a login si ya tienes cuenta";
        if (showLogin) {
          form.removeEventListener("submit", doRegister);
        } else {
          form.removeEventListener("submit", doLogin);
        }

        form.addEventListener("submit", showLogin ? doLogin : doRegister);
      },
      className: "button-toggle",
    })
  );

  form.addEventListener("submit", doLogin);

  LoginForm(form);
  div.append(form);
};
