const Footer = () => {
	const footer = document.createElement("footer");
	const paragraph = document.createElement("p");
	paragraph.classList.add("copyright");
	paragraph.textContent = "Created by Rock the Code";
	footer.appendChild(paragraph);
	document.body.appendChild(footer);
};

export default Footer;
