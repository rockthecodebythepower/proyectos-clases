import "./Product.css";
import {Paragraph} from "../Paragraph/Paragraph";

const text =
	"Tagline Fast and powerful, just like your work Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit";

export const Product = () => {
	return `
    <article class="product" id="product">
        <div>
            <h2>Nulla commodo aliqua aliqua ut</h2>
            <ul>
                <li>
                    ${Paragraph(text)}
                    <a href="#">Read more →</a>
                </li>
                <li>
                    ${Paragraph(text)}
                    <a href="#">Read more →</a>
                </li>
            </ul>
        </div>
        <img src="/images/placeholder_xl.png" alt="Placeholder image"/>
    </article>
    `;
};
