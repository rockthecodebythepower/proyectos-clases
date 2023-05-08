import { USER, pintarBotones } from "../../../main";
import { users } from "../../data/users";
import { solicitarPublicaciones } from "../Publicaciones/Publicaciones";
import "./Form.css";

export const initForm = (tipo) => {
  const form$$ = document.querySelector("form");

  form$$.innerHTML = `
        <div>
            <div>
                <label>UserName</label>
                <input id="username"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" id="password"/>
            </div>
            <button type="button" id="enviar">${
            tipo === "login" ? "LOGIN" : "REGISTRARSE"
            }</button>
        </div>
    `;

  const button$$ = document.querySelector("#enviar");

  if (tipo === "login") {
    //? login
    button$$.addEventListener("click", login);
  } else {
    //? register
    button$$.addEventListener("click", register);
  }
};

const login = () => {
  const userName$$ = document.querySelector("#username");
  const password$$ = document.querySelector("#password");
  const form$$ = document.querySelector("form");

  const userFound = users.find(
    (user) =>
      user.userName === userName$$.value && user.password === password$$.value
  );

  if (userFound) {
    USER.userId = userFound.userId;
    USER.userName = userFound.userName;
    USER.password = userFound.password;
    USER.rol = userFound.rol;

    localStorage.setItem("user", JSON.stringify(USER));
  }

  userFound ? pintarBotones() : console.log("no tenemos user");

  setTimeout(() => {
    form$$.innerHTML = "";
  }, 1000);
  
  solicitarPublicaciones();
};

const register = () => {
  const userName$$ = document.querySelector("#username");
  const password$$ = document.querySelector("#password");
  const form$$ = document.querySelector("form");

  const newUser = {
    userId: users.length + 1,
    userName: userName$$.value,
    password: password$$.value,
    rol: "user",
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  setTimeout(() => {
    form$$.innerHTML = "";
  }, 1000);
};
