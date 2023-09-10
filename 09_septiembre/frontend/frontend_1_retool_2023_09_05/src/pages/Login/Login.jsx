import { useState } from "react";
import "./Login.css";
import { users } from "../../data/users";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
    correo: null,
    password: null
}

const Login = ({ setUser, setToken }) => {

    const [datos, setDatos] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const hacerLogin = (e) => {

        const datosToSend = JSON.stringify(datos);

        e.preventDefault();

        fetch("http://localhost:3000/api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: datosToSend
        }).then((res) =>res.json()).then((res) => {
            if (typeof res !== "object") {
                console.log("errorrrrr");
            } else {
                setUser(res.user);
                setToken(res.token);
                navigate("/");
                localStorage.setItem("user", JSON.stringify(res.user));
                localStorage.setItem("token", JSON.stringify(res.token));
            }
        })
    }

    return (
        <form id="login" onSubmit={hacerLogin}>
            <div>
                <label>El correo electrónico de ThePowerMba</label>
                <input id="correo" onInput={(e) => setDatos({ ...datos, email: e.target.value })} />
            </div>
            <div>
                <label>La contraseña que os haya llegado</label>
                <input id="password" type="password" onInput={(e) => setDatos({ ...datos, password: e.target.value })} />
            </div>
            <button>Log in</button>
        </form>
    )
}

export default Login