import Card from "../../components/Card/Card";
import { skills } from "../../data/skills";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        {skills.map((skill, index) => (
          <Card key={index} title={skill.name} src={skill.img} size="s" />
        ))}
      </div>
    </div>
  );
};

export default Skills;
