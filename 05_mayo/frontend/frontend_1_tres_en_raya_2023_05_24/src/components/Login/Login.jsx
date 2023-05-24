import { useState } from "react";
import "./Login.css";

const INIT_VALUE = {
  userName: "",
  password: "",
};

const Login = ({ setUser, setToken }) => {
  const [form, setForm] = useState(INIT_VALUE);
  const [abierto, setAbierto] = useState(false);

  const hacerLogin = async () => {

    let userLogin = JSON.stringify(form);

    const resultado = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: userLogin,
    });
    const respuesta = await resultado.json();
    localStorage.setItem("user", JSON.stringify(respuesta.userDB));
    localStorage.setItem("token", respuesta.token);
    setUser(respuesta.userDB);
    setToken(respuesta.token);
    setAbierto(false);
  };

  return (
    <div className="login">
      <img src="/assets/menu.png" onClick={() => setAbierto(!abierto)} />
      <div className={abierto ? "modalOpened" : "modal"}>
        <form>
          <input
            placeholder="userName..."
            onInput={(e) => setForm({ ...form, userName: e.target.value })}
          />
          <input
            placeholder="password..."
            type="password"
            onInput={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="button" onClick={hacerLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
