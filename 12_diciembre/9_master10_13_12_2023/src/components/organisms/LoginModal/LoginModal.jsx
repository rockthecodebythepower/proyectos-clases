import { useForm } from "react-hook-form";
import "./LoginModal.css";
import { API } from "../../../utils/API/API";

const LoginModal = () => {

  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    const res = await API.post("/users/login", data);
    console.log(res);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <div>
        <label>DNI</label>
        <input {...register("DNI")}></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register("password")}></input>
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginModal;
