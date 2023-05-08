import "./Hero.css";
import {Title} from "../Title/Title";

export const Hero = () => {
	return `
    <section class="hero">
        ${Title("Landing Page")}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </section>
    `;
};
