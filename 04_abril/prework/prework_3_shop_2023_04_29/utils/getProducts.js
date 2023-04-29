export const getProducts = async () => {
	const res = await fetch(
		"https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D"
	);
	const resJSON = await res.json();
	const data = resJSON.data.products.edges;
	//Vamos a limpiar nuestro array de products
	const products = data.map((item) => ({
		title: item.node.title,
		image: item.node.featuredImage.url,
		price: item.node.variants.edges[0].node.price.amount,
	}));
	return products;
};
