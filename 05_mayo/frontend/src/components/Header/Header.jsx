import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
	return (
		<header>
			<div>
				<img src={logo} alt="Happy Hues logo" />
				<h1>Happy Hues</h1>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#null">Toggle palettes</a>
					</li>
					<li>
						<a href="#null">Toggle section colors</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
