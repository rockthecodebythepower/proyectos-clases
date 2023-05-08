import { initForm } from "./src/components/Form/Form";
import { solicitarPublicaciones } from "./src/components/Publicaciones/Publicaciones";
import "./style.css";

export let USER = JSON.parse(localStorage.getItem("user")) || {};

const initApp = () => {
  const APP$$ = document.querySelector("#app");

  APP$$.innerHTML = `
    <header>
    </header>
    <main>
      <form>
      </form>
      <section id="posts">
      </section>
    </main>  
  `;

  pintarBotones();
  solicitarPublicaciones();
};

export const pintarBotones = () => {
  const header$$ = document.querySelector("header");

  header$$.innerHTML = `
    <button id="register" class="${USER.userId && "no-visible"}">REGISTRO</button>
    <button id="login" class="${USER.userId && "no-visible"}">LOGIN</button>
    <button id="logout" class="${!USER.userId && "no-visible"}">LOGOUT</button>
  `;

  const register$$ = document.querySelector("#register");
  const login$$ = document.querySelector("#login");
  const logout$$ = document.querySelector("#logout")

  register$$.addEventListener("click", () => initForm("register"));
  login$$.addEventListener("click", () => initForm("login"));
  logout$$.addEventListener("click", logout)

};

const logout = () => {
  localStorage.removeItem("user");
  USER = {};
  pintarBotones();
  solicitarPublicaciones()
}

initApp();