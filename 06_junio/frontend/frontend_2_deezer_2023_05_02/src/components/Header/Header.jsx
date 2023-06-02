import "./Header.css";
import logo from "../../assets/logo.png";
import {DataContext} from "../../contexts/DataContext";
import {useContext, useState} from "react";

const Header = () => {
	const [inputValue, setInputValue] = useState("");
	const {theme, setTheme, setKeyword} = useContext(DataContext);

	const changeTheme = () => {
		if (theme === "") {
			setTheme("dark");
		} else {
			setTheme("");
		}
	};

	const changeKeyword = () => {
		setKeyword(inputValue);
		setInputValue("");
	};

	return (
		<header>
			<img src={logo} alt="Deezer logo" />
			<input
				type="text"
				placeholder="Band name..."
				onInput={(ev) => setInputValue(ev.target.value)}
				value={inputValue}
			/>
			<button onClick={changeKeyword}>Search</button>
			<button onClick={changeTheme}>Theme</button>
		</header>
	);
};

export default Header;
