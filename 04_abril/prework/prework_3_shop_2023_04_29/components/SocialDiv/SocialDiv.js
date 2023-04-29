import "./SocialDiv.css";

export const SocialDiv = () => {
	const socialDiv = document.createElement("div");
	socialDiv.classList.add("social-icons");
	//Creamos cada uno de los iconos
	const twitter = document.createElement("img");
	twitter.src = "/twitter.svg";
	twitter.alt = "Twitter icon";
	socialDiv.appendChild(twitter);
	const facebook = document.createElement("img");
	facebook.src = "/facebook.svg";
	facebook.alt = "Facebook icon";
	socialDiv.appendChild(facebook);
	const pinterest = document.createElement("img");
	pinterest.src = "/pinterest.svg";
	pinterest.alt = "Pinterest icon";
	socialDiv.appendChild(pinterest);
	return socialDiv;
};
