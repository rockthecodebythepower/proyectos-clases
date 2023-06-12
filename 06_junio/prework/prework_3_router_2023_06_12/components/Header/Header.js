import "./Header.css";

const template = () => {
	return `
    <h1>Router</h1>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/gallery">Gallery</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    `;
};

const Header = () => {
	document.querySelector("header").innerHTML = template();
};

export default Header;
