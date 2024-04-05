import Card from "../../components/Card/Card";
import { projects } from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            src={project.img}
            size="l"
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
