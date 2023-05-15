import "./Main.css";
import {aboutData, educationData, projectsData} from "../../data/data";
import {About} from "../About/About";
import {Education} from "../Education/Education";
import {Projects} from "../Projects/Projects";

const template = () => {
	return `
    ${About(aboutData)}
    ${Education(educationData)}
    ${Projects(projectsData)}
    
    `;
};

export const Main = () => {
	document.querySelector("main").innerHTML = template();
};
