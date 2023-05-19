import { useEffect, useRef, useState } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import ButtonTroll from "buttontroll";
import "./Register.css";

const INITIAL_STATE = {
  userName: "",
  email: "",
  password: "",
  image: "",
};

const Register = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [image, setImage] = useState();
  const firstInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }

  return (
    <div>
      <form className="register">
        <UserInfo
          label="Nombre de usuario"
          placeholder="Paquito"
          reference={firstInput}
          id="userName"
          formState={formState}
          setFormState={setFormState}
        />
        <UserInfo
          label="Email"
          placeholder="paquito@gmail.com"
          id="email"
          formState={formState}
          setFormState={setFormState}
        />
        <UserInfo
          label="Contraseña"
          placeholder="******"
          type="password"
          id="password"
          formState={formState}
          setFormState={setFormState}
        />
        <UserInfo
          label="seleccionar imagen"
          type="file"
          id="image"
          formState={formState}
          setFormState={setFormState}
          onImageChange={onImageChange}
        />
        <img src={image}/>
        <ButtonTroll text="Registrarse" funcion={() => console.log(formState)} />
      </form>
    </div>
  );
};

export default Register;
