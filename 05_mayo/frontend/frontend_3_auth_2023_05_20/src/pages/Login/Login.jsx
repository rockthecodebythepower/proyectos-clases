import {useState, useContext} from "react";
import {UserContext} from "../../context/userContext";
import {useNavigate} from "react-router-dom";
import "./Login.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const {setUserLogged} = useContext(UserContext);
	const navigate = useNavigate();

	const login = (ev) => {
		ev.preventDefault();
		if (username === "Peter") {
			localStorage.setItem("user", username);
			setUserLogged(true);
			navigate("/content");
		} else {
			alert("¡Usuario incorrecto!");
		}
	};
	return (
		<main>
			<form onSubmit={(ev) => login(ev)}>
				<input
					type="text"
					placeholder="Username"
					onInput={(ev) => setUsername(ev.target.value)}
				/>
				<button>Login</button>
			</form>
		</main>
	);
};

export default Login;
