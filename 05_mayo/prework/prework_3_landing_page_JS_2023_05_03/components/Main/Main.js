import "./Main.css";
import {Product} from "../Product/Product";
import {About} from "../About/About";
import {Contact} from "../Contact/Contact";

const template = () => {
	return `
    ${Product()}
    ${About()}
    ${Contact()}
    `;
};

export const printTemplate = () => {
	document.querySelector("main").innerHTML = template();
};
