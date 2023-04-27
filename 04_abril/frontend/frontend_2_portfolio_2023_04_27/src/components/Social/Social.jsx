import "./Social.css"

const Social = ({link, logo}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="social">
      <img src={logo} alt="Social logo" />
    </a>
  )
}

export default Social
