import "./Header.css";
import { template as Hero } from "../Hero/Hero";

const template = () => {
  return `
<nav>
    <h1>Walter White</h1>
    <ul>
        <li>
            <a href="#">Work</a>
        </li>
        <li>
            <a href="#">Resume</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>
</nav>
${Hero()}
`;
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
