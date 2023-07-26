import "./Tech.css";
import TechCard from "../TechCard/TechCard";
import techlist from "../../data/techlist";

const Tech = () => {
  return `
  <section class="tech">
   ${techlist.map((item) => TechCard(item.title, item.image)).join("")}
  </section>
  `;
};

export default Tech;
