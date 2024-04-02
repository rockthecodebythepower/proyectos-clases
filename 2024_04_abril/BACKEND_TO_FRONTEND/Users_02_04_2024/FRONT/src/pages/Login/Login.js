import { Alert } from "../../components/Alert/Alert";
import { FieldForm } from "../../components/FieldForm/FieldForm";
import { API_URL, app } from "../../utils/variables/variables";
import { Users } from "../Users/Users";
import "./Login.css";

export const Login = () => {
  app.innerHTML = ``;

  const form = document.createElement("form");

  form.classList.add("login-form");

  form.innerHTML = `
        ${FieldForm({ labelText: "Nombre de usuario" })}
        ${FieldForm({ labelText: "Contraseña", type: "password" })}
        <button>Login</button>
    `;

  form.addEventListener("submit", submitLogin);

  app.append(form);
};

const submitLogin = async (e) => {
  e.preventDefault();

  const userObject = {
    userName: e.target[0].value,
    password: e.target[1].value,
  };

  const userJSON = JSON.stringify(userObject);

  const res = await fetch(API_URL + "/users/login", {
    method: "POST",
    body: userJSON,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const { token, user } = await res.json();
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    Users();
  } else {
    const response = await res.json();
    Alert(response);
  }
};
