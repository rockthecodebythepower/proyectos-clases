import "./TechCard.css";

const TechCard = (title, logo) => {
  return `
  <div class="tech-card">
    <h3>${title}</h3>
    <img src="${logo}" alt='${title} logo'/>
  </div>
  `;
};

export default TechCard;
