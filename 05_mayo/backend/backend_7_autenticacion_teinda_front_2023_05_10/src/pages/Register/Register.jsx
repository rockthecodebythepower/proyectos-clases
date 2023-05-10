import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const newUser = async (user) => {
    const resultado = await fetch(
      "http://localhost:3000/api/v1/users/register",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const res = await resultado.json();

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(newUser)}>
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
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
