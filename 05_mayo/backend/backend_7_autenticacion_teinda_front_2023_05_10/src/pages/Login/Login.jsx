import { useForm } from "react-hook-form";
import "./Login.css";
import { useContext } from "react";
import { userContext } from "../../context/userProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const { setUser } = useContext(userContext);

  const login = async (user) => {
    const resultado = await fetch(
      "http://localhost:3000/api/v1/users/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const res = await resultado.json();

    setUser(res.userDB);
    localStorage.setItem("user", JSON.stringify(res.userDB));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <label>User</label>
          <input placeholder="username" {...register("userName")} />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="*******"
            type="password"
            {...register("password")}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
