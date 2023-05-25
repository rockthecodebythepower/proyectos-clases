import "./Header.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../contexts/usercontext";

const Header = () => {
	const {userLogged, setUserLogged} = useContext(UserContext);
	const navigate = useNavigate();

	const logout = () => {
		setUserLogged(false);
		localStorage.removeItem("user");
		navigate("/login");
	};
	return (
		<header>
			<h1>React Auth</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					{userLogged && (
						<li>
							<NavLink to="/gallery">Gallery</NavLink>
						</li>
					)}
					{userLogged && (
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					)}
					{userLogged ? (
						<li>
							<button onClick={() => logout()}>Logout</button>
						</li>
					) : (
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
