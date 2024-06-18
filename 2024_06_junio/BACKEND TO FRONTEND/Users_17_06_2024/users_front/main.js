import { Login } from "./src/components/Login/Login";
import { Register } from "./src/components/Register/Register";
import { Users } from "./src/components/Users/Users";
import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="register"></div>
  <div class="login"></div>
  <div class="users"></div>
`;

Register();
Login();
Users();

/* let tiempo = 0;
let intervalo; */

/* window.addEventListener("blur", () => {
  intervalo = setInterval(() => {
    tiempo++;
    console.log(tiempo);
    if (tiempo > 50) {
      localStorage.clear();
      window.location.reload();
    }
  }, 1000);
});

window.addEventListener("click", () => {
  tiempo = 0;
  console.log(tiempo);
  clearInterval(intervalo);
}) */