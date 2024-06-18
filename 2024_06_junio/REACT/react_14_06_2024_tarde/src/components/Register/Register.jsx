import { useState } from "react";
import "./Register.css";
import FieldForm from "../FieldForm/FieldForm";
import Button from "../Button/Button";
import Form from "../Form/Form";
import { submit } from "../../utils/submit";

const Register = ({ paquito }) => {
  const [registerForm, setRegisterForm] = useState({
    email: null,
    age: 0,
    happiness: 0,
    password: null,
  });

  return (
    <Form submit={(e) => submit(e, paquito, registerForm)}>
      <FieldForm
        ph="Email"
        set={setRegisterForm}
        value={registerForm}
        prop="email"
      />
      <FieldForm
        ph="Edad"
        type="number"
        set={setRegisterForm}
        value={registerForm}
        prop="age"
      />
      <FieldForm
        type="range"
        labelText="Felicidad"
        set={setRegisterForm}
        value={registerForm}
        prop="happiness"
      />
      <FieldForm
        ph="Contraseña"
        set={setRegisterForm}
        value={registerForm}
        prop="password"
      />
      <p>
        Si ya tienes cuenta ve al{" "}
        <span onClick={() => paquito("login")}>Login</span>
      </p>
      <Button>Registrarse</Button>
    </Form>
  );
};

export default Register;
