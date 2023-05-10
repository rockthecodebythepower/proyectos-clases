import "./Home.css";
import {useContext, useState} from "react";
import {UserContext} from "../../context/userContext";

const Home = () => {
	const {user, setUser} = useContext(UserContext);
	const [inputValue, setInputValue] = useState("");
	return (
		<main>
			<h2>Home</h2>
			{user !== null ? (
				<h3>Welcome {user}</h3>
			) : (
				<div>
					<input type="text" onInput={(ev) => setInputValue(ev.target.value)} />
					<button onClick={() => setUser(inputValue)}>Login</button>
				</div>
			)}
		</main>
	);
};

export default Home;
