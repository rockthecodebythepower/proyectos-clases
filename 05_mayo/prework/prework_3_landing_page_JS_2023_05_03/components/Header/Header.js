import "./Header.css";
import {Navigation} from "../Navigation/Navigation";
import {Hero} from "../Hero/Hero";

const template = () => {
	return `
   	${Navigation()}
    ${Hero()}
    `;
};

const listeners = () => {
	const themeBtn = document.querySelector("#themeBtn");
	themeBtn.addEventListener("click", () => {
		document.body.classList.toggle("dark");
	});
};

export const printTemplate = () => {
	document.querySelector("header").innerHTML = template();
	listeners();
};
