import { Header } from "../../components/Header/Header";
import { Home } from "../Home/Home";
import "./LoginRegister.css";

export const LoginRegister = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const loginDiv = document.createElement("div");

  Login(loginDiv);

  loginDiv.id = "login";

  main.append(loginDiv);
};

const Login = (elementoPadre) => {
  const form = document.createElement("form");

  const inputUN = document.createElement("input");
  const inputPass = document.createElement("input");
  const button = document.createElement("button");

  inputPass.type = "password";
  inputUN.placeholder = "User Name";
  inputPass.placeholder = "*****";
  button.textContent = "Login";

  elementoPadre.append(form);
  form.append(inputUN);
  form.append(inputPass);
  form.append(button);

  form.addEventListener("submit", () => submit(inputUN.value, inputPass.value, form));
};

const submit = async (userName, password, form) => {
    // este fetch necesita que le demos más info -> necesita ser capaz de enviarle a esa ruta, el método POST, un JSON con el userName y la password e indicarle a la petición que tipo de contenido se está utilizando mediante los headers

    const objetoFinal = JSON.stringify({
        userName,
        password
    });

    const opciones = {
        method: "POST",
        body: objetoFinal,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch("http://localhost:3000/api/v1/users/login", opciones);

    if (res.status === 400) {
        const pError = document.createElement("p");

        pError.classList.add("error")
        pError.textContent = "Usuario o contraseña incorrectos";
        pError.style = "color: red";

        form.append(pError);
        return;
    }

    const pError = document.querySelector(".error");
    if (pError) {
        pError.remove();
    }

    const respuestaFinal = await res.json();

    localStorage.setItem("token", respuestaFinal.token);
    localStorage.setItem("user", JSON.stringify(respuestaFinal.user));
    Home();
    Header();
}

// esta es la ruta a la que deseamos realizar la petición 
/* http://localhost:3000/api/v1/users/login */