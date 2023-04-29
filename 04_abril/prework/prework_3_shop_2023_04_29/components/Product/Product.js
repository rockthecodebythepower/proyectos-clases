import "./Product.css";

export const Product = (product) => {
	const li = document.createElement("li");
	//Completamos la información de los productos
	const img = document.createElement("img");
	img.src = `${product.image}&width=500`;
	img.alt = product.title;
	img.loading = "lazy";
	li.appendChild(img);
	const a = document.createElement("a");
	a.href = "https://mock.shop/products";
	a.textContent = product.title;
	li.appendChild(a);
	const p = document.createElement("p");
	p.textContent = `$${product.price} CAD`;
	li.appendChild(p);
	return li;
};
