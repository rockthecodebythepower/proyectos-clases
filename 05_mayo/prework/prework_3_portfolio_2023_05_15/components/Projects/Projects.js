import "./Projects.css";

export const Projects = (projectsData) => {
	return `
    <section class="projects" id="projects">
    <h2>Projects</h2>
    <div class="projects-container">
    ${projectsData
			.map(
				(item) => `
    <article>
    <img src=${item.image} alt=${item.title}/>
    <h3>${item.title}</h3>
    <p>${item.job}</p>
    <p>${item.date}</p>
    <p>${item.description}</p>
    </article>
    `
			)
			.join("")}
    </div>
    </section>
    `;
};
