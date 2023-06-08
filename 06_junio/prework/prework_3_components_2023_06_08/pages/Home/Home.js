const template = () => {
	return `
    <h2>Home</h2>
    <p>Welcome to my SPA!</p>
    `;
};

const Home = () => {
	document.querySelector("main").innerHTML = template();
};

export default Home;
