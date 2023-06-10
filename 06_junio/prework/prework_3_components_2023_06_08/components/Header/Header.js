import "./Header.css";
import Title from "../Title/Title";
import Navigator from "../Navigator/Navigator";
import {links} from "../../data/data";

const template = () => {
	return `
    ${Title("My SPA")}
    ${Navigator(links)}
    `;
};

const Header = () => {
	document.querySelector("header").innerHTML = template();
};

export default Header;
