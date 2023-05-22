import "./Header.css";

const template = () => {
	return `
    <h1>Comic Vine</h1>
    `;
};

export const printTemplate = () => {
	document.querySelector("header").innerHTML = template();
};
