import "./Heading2.css";

export const Heading2 = (text) => {
	const h2 = document.createElement("h2");
	h2.textContent = text;
	return h2;
};
