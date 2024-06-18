import { useState } from "react";
import "./Login.css";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { submit } from "../../utils/submit";

const Login = ({ setForm }) => {
  const [loginForm, setLoginForm] = useState({
    email: null,
    password: null,
  });

  return (
    <Form submit={(e) => submit(e, setForm, loginForm)}>
      <FieldForm ph="Email" set={setLoginForm} value={loginForm} prop="email" />
      <FieldForm
        ph="Contraseña"
        set={setLoginForm}
        value={loginForm}
        prop="password"
      />
      <p>
        ¿No tienes cuenta?{" "}
        <span onClick={() => setForm("register")}>Registrarse</span>
      </p>
      <Button>Entrar</Button>
    </Form>
  );
};

export default Login;
