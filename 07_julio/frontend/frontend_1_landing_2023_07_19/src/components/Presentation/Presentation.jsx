import "./Presentation.css";

const Presentation = ({ img, slogan, title, title2, buttonText, direction }) => {
  return (
    <div class={direction} id="presentation">
        <div>
            <p className="slogan">{slogan}</p>
            <h2 className="title">{title}</h2>
            <h2 className="title2">{title2}</h2>
            <button>{buttonText}</button>
        </div>
        <img src={img}/>
    </div>
  )
}

export default Presentation