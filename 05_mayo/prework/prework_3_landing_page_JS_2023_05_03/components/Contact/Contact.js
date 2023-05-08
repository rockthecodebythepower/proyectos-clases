import "./Contact.css";
import {Paragraph} from "../Paragraph/Paragraph";

const text =
	"Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit";

export const Contact = () => {
	return `
    <article class="contact" id="contact">
        <div>
            <h2>Where teams design together</h2>
            ${Paragraph(text)}
        </div>
        <ul>
            <li>
                <img src="/images/placeholder_sm.png" alt="Placeholder image"/>
            </li>
            <li>
                <img src="/images/placeholder_sm.png" alt="Placeholder image"/>
            </li>
            <li>
                <img src="/images/placeholder_sm.png" alt="Placeholder image"/>
            </li>
        </ul>
    </article>
    `;
};
