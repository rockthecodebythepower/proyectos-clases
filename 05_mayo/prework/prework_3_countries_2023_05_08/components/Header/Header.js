import "./Header.css";
import Title from "../Title/Title";

const template = () => {
	return `
    ${Title("World Countries")}
    `;
};

export const printTemplate = () => {
	document.querySelector("header").innerHTML = template();
};
