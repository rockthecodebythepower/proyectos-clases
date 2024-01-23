import { useRef, useState } from "react";
import "./NativeForm.css";

const NativeForm = () => {
  /* const [formState, setFormState] = useState({
    fechaNac: "",
    userName: "",
    password: "",
  }); */

  const [errors, setErrors] = useState({});

  const inputDate = useRef();
  const inputUserName = useRef();
  const inputPassword = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (parseInt(inputDate.current.value.slice(0, 4)) > 2006) {
      setErrors({
        ...errors,
        date: {
          message: "No eres mayor de edad",
          ref: inputDate.current,
        },
      });
    } else {
      // TODO HA IDO BIEN
      console.log({
        date: inputDate.current.value,
        userName: inputUserName.current.value,
        password: inputPassword.current.value,
      });
    }
  };

  console.log("SOY NATIVE FORM Y ME RE-RENDERIZO");

  return (
    <div className="form-wrp">
      <h2>Este es el formulario nativo</h2>
      <form onSubmit={submit}>
        <div>
          <label>Fecha de nacimiento</label>
          <input type="date" ref={inputDate} />
          {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
        </div>
        <div>
          <label>Nombre de usuario</label>
          <input ref={inputUserName} />
        </div>
        <div>
          <label>Contaseña</label>
          <input type="password" ref={inputPassword} />
        </div>
        <button>Registro</button>
      </form>
    </div>
  );
};

export default NativeForm;
