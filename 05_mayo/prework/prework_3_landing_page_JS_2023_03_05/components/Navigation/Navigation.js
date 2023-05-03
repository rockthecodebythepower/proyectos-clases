import "./Navigation.css";

export const Navigation = () => {
	return `
    <nav>
    <img src="/images/logo.png" alt="Landing Page logo"/>
    <ul>
        <li>
            <a href="#product">Product</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
    <button id="themeBtn">Change Theme</button>
    </nav>
    `;
};
