import { useContext, useEffect, useRef, useState } from "react";
import "./Register.css";
import FieldForm from "../../components/FieldForm/FieldForm";
import { userContext } from "../../providers/UserProvider";

const Register = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();

  const { setUser } = useContext(userContext);

  // useState y useEffect
  // useRef useReducer useMemo useCallback useContext, useLayoutEffect, useImperativeHandle

  const submit = (e) => {
    const objeto = {
      email: emailRef.current.value,
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
      city: cityRef.current.value,
    };
    e.preventDefault();
    setUser({ ...objeto });
    console.log(objeto);
  };

  console.log("SOY REGISTER Y ME RE-RENDERIZO");

  return (
    <div>
      <form onSubmit={submit}>
        <FieldForm labelText="Email" type="email" reference={emailRef} />
        <FieldForm labelText="Nombre de usuario" reference={userNameRef} />
        <FieldForm
          labelText="Contraseña"
          type="password"
          reference={passwordRef}
        />
        <FieldForm
          labelText="Ciudad"
          reference={cityRef}
          options={[
            { value: "madrid", text: "Madrid" },
            { value: "cuenca", text: "Cuenca" },
            { value: "león", text: "León" },
          ]}
        />
        <button>Registro</button>
      </form>
    </div>
  );
};

export default Register;
