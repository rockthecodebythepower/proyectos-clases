import "./Header.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
const Header = () => {
	const {user, setUser} = useContext(UserContext);
	const navigate = useNavigate();
	return (
		<header>
			<h1>My docs</h1>
			{user !== null && <h2>Welcome {user}</h2>}
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					{user !== null && (
						<li>
							<NavLink to="/docs">Docs</NavLink>
						</li>
					)}
					{user !== null && (
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					)}
					{user !== null && (
						<li>
							<button
								onClick={() => {
									setUser(null);
									navigate("/");
								}}
							>
								Logout
							</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
