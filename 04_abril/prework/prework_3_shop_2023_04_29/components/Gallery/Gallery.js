import "./Gallery.css";
import {Product} from "../Product/Product";
import {getProducts} from "../../utils/getProducts";
import {Heading2} from "../Heading2/Heading2";

const template = async () => {
	const main = document.querySelector("main");
	main.appendChild(Heading2("Unisex"));
	//Creamos la lista
	const ul = document.createElement("ul");
	ul.classList.add("gallery");
	//Almacenamos los productos;
	const products = await getProducts();
	for (const product of products) {
		ul.appendChild(Product(product));
	}

	main.appendChild(ul);
};

export const printTemplate = () => {
	template();
};
