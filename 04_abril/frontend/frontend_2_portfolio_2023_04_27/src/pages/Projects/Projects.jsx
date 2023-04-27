import "./Projects.css"
import Project from "../../components/Project/Project"
import ProjectGallery from "../../layout/ProjectGallery/ProjectGallery"

const Projects = () => {
  return (
    <main className="projects">
      <ProjectGallery>
        <Project
          title="Mi primera app con React"
          link="http://github.com"
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <Project
          title="Shopping app"
          link="http://github.com"
          image="https://plus.unsplash.com/premium_photo-1670863088251-500151f2117b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <Project
          title="Food app"
          link="http://github.com"
          image="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <Project
          title="Bitcoin"
          link="http://github.com"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Project
          title="TeamWork"
          link="http://github.com"
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Project
          title="Zen"
          link="http://github.com"
          image="https://plus.unsplash.com/premium_photo-1682109363052-4778e053cde0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </ProjectGallery>
    </main>
  )
}

export default Projects
