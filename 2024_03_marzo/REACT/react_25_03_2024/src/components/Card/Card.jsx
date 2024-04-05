import ImgWrp from "../ImgWrp/ImgWrp";
import "./Card.css";

const Card = ({ size = "s", title, src, technologies = [] }) => {
  return (
    <div
      className="card"
      style={{
        height: size === "s" ? "200px" : "400px",
        width: size === "s" ? "200px" : "350px",
      }}
    >
      <ImgWrp src={src} />
      <h3>{title}</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <img key={index} width="30px" height="30px" src={tech} />
        ))}
      </div>
    </div>
  );
};

export default Card;
