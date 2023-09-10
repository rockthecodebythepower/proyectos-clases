import Project from "../../components/Project/Project";
import "./Projects.css"

const Projects = ({ user }) => {

    return (
        <div className="projects">
            {user && user.projects.map((project) => <Project key={JSON.stringify(project)} project={project}/>)}
        </div>
    )

}

export default Projects;