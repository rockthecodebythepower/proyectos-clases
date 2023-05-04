import "./Header.css";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Navigator from "../Navigator/Navigator";
import {links} from "../../data/data";

const Header = () => {
	return (
		<header>
			<Title text="React components" />
			<Navigator links={links} />
			<Logo />
		</header>
	);
};

export default Header;
