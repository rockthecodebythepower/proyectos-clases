import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import "./Header.css";

const Header = () => {
	const {userLogged, setUserLogged} = useContext(UserContext);
	return (
		<header>
			<h1>Auth App</h1>
			{userLogged ? <p>Welcome user</p> : <p>Please log in</p>}
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>{userLogged && <NavLink to="/content">Content</NavLink>}</li>
				<li>{userLogged && <NavLink to="/about">About</NavLink>}</li>
				<li>
					{userLogged ? (
						<button
							className="logout"
							onClick={() => {
								setUserLogged(false);
								localStorage.removeItem("user");
							}}
						>
							Logout
						</button>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}
				</li>
			</ul>
		</header>
	);
};

export default Header;
