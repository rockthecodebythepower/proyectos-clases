import "./About.css";

export const About = (about) => {
	return `
    <section class="about" id="about">
        <h2>${about.intro}</h2>
        <p>${about.about}</p>
    </section>`;
};
