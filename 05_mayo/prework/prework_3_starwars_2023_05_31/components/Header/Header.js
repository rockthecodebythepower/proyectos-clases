import "./Header.css";

const template = () => {
	return `
    <img src="/images/logo.png" alt="Star Wars Logo"/>
    `;
};

export const Header = () => {
	document.querySelector("header").innerHTML = template();
};
