import "./About.css";
import {Paragraph} from "../Paragraph/Paragraph";

const text =
	"Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt";

export const About = () => {
	return `
    <article class="about" id="about">
        <div>
            <h2>Nulla ut ea</h2>
            ${Paragraph(text)}
        </div>
        <ul>
            <li>Graphic Design</li>
            <li>UX Design</li>
            <li>Prototyping</li>
            <li>Webflow</li>
            <li>Branding</li>
            <li>Coding</li>
            <li>Back-End</li>
        </ul>
    </article>
    `;
};
