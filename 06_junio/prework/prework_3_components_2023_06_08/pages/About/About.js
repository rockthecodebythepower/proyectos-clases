const template = () => {
	return `
    <h2>About</h2>
    <p>Know more about me!</p>
    `;
};

const About = () => {
	document.querySelector("main").innerHTML = template();
};

export default About;
