import "./Project.css"

const Project = ({title, link, image}) => {
  return (
    <figure className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link}>Repository</a>
    </figure>
  )
}

export default Project
