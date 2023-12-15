import "./FlipCardBack.css";

const FlipCardBack = ({ children, className }) => {
  return (
    <div className={`flip-card-back ${className}`}>
      { children }
    </div>
  );
};

export default FlipCardBack;