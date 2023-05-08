import "./Footer.css";
import Copyright from "../Copyright/Copyright";

const template = () => {
	return `
    ${Copyright("Copyright© - Rock the Code - 2023")}
    `;
};

export const printTemplate = () => {
	document.querySelector("footer").innerHTML = template();
};
