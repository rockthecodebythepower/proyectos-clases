import "./Card.css";

export const Card = (item) => {
  return `
  <article class="card">
    <img src=${item.image} alt=${item.title} />
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <a href=${item.link}>Know more</a>
  </article>
  `;
};
