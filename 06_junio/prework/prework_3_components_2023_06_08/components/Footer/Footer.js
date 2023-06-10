import "./Footer.css";

const template = () => {
	return `
    <p>My Copyright 2023 - My name</p>
    `;
};

const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};

export default Footer;
