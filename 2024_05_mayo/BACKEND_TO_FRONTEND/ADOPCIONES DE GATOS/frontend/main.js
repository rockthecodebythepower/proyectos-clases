import { getCats } from "./src/components/Cats/Cats";
import { API } from "./src/utils/API";
import "./style.css";

const form = document.querySelector(".form");
const checkbox = document.querySelector("input[type='checkbox']");
const button = document.querySelector(".form>button");

let endpoint = "/register";

const submit = async (e) => {
  e.preventDefault();
  const [emailInput, passwordInput] = form;

  const response = await API({
    endpoint: `/users${endpoint}`,
    method: "POST",
    payload: { email: emailInput.value, password: passwordInput.value },
  });

  console.log(response);

  if (endpoint === "/login") {
    localStorage.setItem("token", response.token);
  }

};

const changeFuncionality = (e) => {
  if (checkbox.checked) {
    endpoint = "/login";
    button.textContent = "Login";
  } else {
    endpoint = "/register";
    button.textContent = "Registrarse";
  }
};

checkbox.addEventListener("change", changeFuncionality);
form.addEventListener("submit", submit);

getCats();
