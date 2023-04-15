import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Home.css";

const INITIAL_STATE = {
  correo: "",
  password: "",
};

const Home = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const registro = () => {
    console.log("hola");
  };

  return (
    <div className="home">
      <form>
        <h3>Registro</h3>
        <label>Correo electrónico</label>
        <input
          placeholder="correo@proveedor.com"
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="**********"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button
          texto="Registro"
          tipo="high"
          size="m"
          funcion={() => registro()}
          disabled={!form.correo || !form.password}
        />
      </form>
      <Button
        texto="Logout"
        funcion={() => console.log("te has deslogueado")}
        tipo="medium"
        size="l"
      />
    </div>
  );
};

export default Home;
