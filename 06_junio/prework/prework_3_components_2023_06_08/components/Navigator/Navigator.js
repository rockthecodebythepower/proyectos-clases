import "./Navigator.css";

const Navigator = (links) => {
	return `
    <nav>
        <ul>
            ${links
							.map(
								(link) => `
            <li>
                <a href=${link.link} id=${link.id}>${link.name}</a>
            </li>
            `
							)
							.join("")}
        </ul>
    </nav>
    `;
};

export default Navigator;
