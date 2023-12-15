import { useForm } from "react-hook-form";
import "./Login.css";
import { API } from "../../utils/API/API";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = async (data) => {
    const res = await API.post("/users/login", data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.userFound));
    navigate("/");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <div>
        <div className="linea">
          <label>DNI</label>
          <input {...register("DNI")}></input>
        </div>
      </div>
      <div>
        <div className="linea">
          <label>Contraseña</label>
          <input type="password" {...register("password")}></input>
        </div>
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
