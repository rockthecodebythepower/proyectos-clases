import "./Copyright.css";

export const Copyright = () => {
	const section = document.createElement("section");
	section.classList.add("copyright");
	const copyright = document.createElement("p");
	copyright.textContent = "© 2023, Mock.shop - Liquid Powered by Shopify";
	section.appendChild(copyright);
	return section;
};
