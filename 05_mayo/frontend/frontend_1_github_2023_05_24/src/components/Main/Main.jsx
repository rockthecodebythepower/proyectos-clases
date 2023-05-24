import {useState} from "react";
import "./Main.css";
import Profile from "../Profile/Profile";
import Spinner from "../Spinner/Spinner";

const Main = () => {
	const [user, setUser] = useState(null);
	const [repos, setRepos] = useState([]);
	const [username, setUsername] = useState("");
	const [loaded, setLoaded] = useState(undefined);

	const getUser = async (ev, username) => {
		setLoaded(false);
		ev.preventDefault();
		if (username !== "") {
			const dataUser = await fetch(`https://api.github.com/users/${username}`);
			const dataUserJSON = await dataUser.json();
			setUser(dataUserJSON);
			const dataRepos = await fetch(
				`https://api.github.com/users/${username}/repos`
			);
			const dataReposJSON = await dataRepos.json();
			setRepos(dataReposJSON);
			setUsername("");
			setLoaded(true);
		}
	};

	return (
		<main>
			<form onSubmit={(ev) => getUser(ev, username)}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onInput={(ev) => setUsername(ev.target.value)}
				/>
				<button type="submit">Search</button>
				{loaded === true ? (
					<Profile user={user} repos={repos} />
				) : loaded === false ? (
					<Spinner />
				) : (
					<h3>Search a GitHub user by username...</h3>
				)}
			</form>
		</main>
	);
};

export default Main;
