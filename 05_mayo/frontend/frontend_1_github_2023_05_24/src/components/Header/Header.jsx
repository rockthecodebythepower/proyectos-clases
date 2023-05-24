import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="GitHub logo" />
			<h1>GitHub Profile Finder</h1>
		</header>
	);
};

export default Header;
