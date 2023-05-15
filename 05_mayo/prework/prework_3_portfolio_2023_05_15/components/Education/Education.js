import "./Education.css";

export const Education = (education) => {
	return `
    <section class="education" id="education">
    <h2>Education</h2>
    ${education
			.map(
				(item) => `
    <article>
        <h3>${item.title}</h3>
        <p>${item.location}</p>
        <p>${item.year}</p>
    </article>
    `
			)
			.join("")}
    </section>
    `;
};
