import "./Footer.css";

const template = () => {
	return `
    <h5>TM & © Lucasfilm Ltd. All Rights Reserved</h5>
    `;
};

export const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};
