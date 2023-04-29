import "./Footer.css";
import {SocialDiv} from "../SocialDiv/SocialDiv";
import {Copyright} from "../Copyright/Copyright";
import {Input} from "../Input/Input";
import {Heading2} from "../Heading2/Heading2";
import {Follow} from "../Follow/Follow";
const template = () => {
	const footer = document.querySelector("footer");
	//Creamos el titulo
	footer.appendChild(Heading2("Stay in the know"));
	//Creamos el input
	footer.appendChild(Input());
	//Creamos el párrafo
	footer.appendChild(Follow());
	//Creamos el div de los iconos sociales
	footer.appendChild(SocialDiv());
	//Sección de copyright
	footer.appendChild(Copyright());
};

export const printTemplate = () => {
	template();
};
