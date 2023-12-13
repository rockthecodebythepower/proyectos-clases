import "./FlipCardFront.css";

const FlipCardFront = ({ children, className }) => {
  return (
    <div className={`flip-card-front ${className}`}>
      { children }
    </div>
  );
};

export default FlipCardFront;