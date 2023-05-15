import "./Footer.css";

const template = () => {
	return `
    <h4>2023 - Peter Parker - peterparker@gmail.com</h4>
    `;
};

export const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};
