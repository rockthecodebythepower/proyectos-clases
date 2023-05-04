import "./Footer.css";

const template = () => {
	return `
    <h3>Powered by Rock the Code - 2023</h3>
    `;
};

export const printTemplate = () => {
	document.querySelector("footer").innerHTML = template();
};
