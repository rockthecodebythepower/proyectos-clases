import "./Login.css";
import {useContext, useState} from "react";
import {UserContext} from "../../contexts/usercontext";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const {setUserLogged} = useContext(UserContext);
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (ev) => {
		ev.preventDefault();
		//Vamos a comprobar que username tiene contenido
		if (username === "Rock the Code") {
			//Volvemos true el estado del contexto
			setUserLogged(true);
			localStorage.setItem("user", username);
			navigate("/gallery");
		} else {
			alert("¡No es el usuario correcto!");
		}
		setUsername("");
	};

	return (
		<main>
			<h2>Login</h2>
			<form onSubmit={(ev) => handleSubmit(ev)}>
				<input
					type="text"
					onInput={(ev) => setUsername(ev.target.value)}
					placeholder="Username"
					value={username}
				/>
				<button type="submit">Login</button>
			</form>
		</main>
	);
};

export default Login;
