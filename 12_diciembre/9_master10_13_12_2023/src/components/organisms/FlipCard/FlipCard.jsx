import "./FlipCard.css";
import { useRandom } from "../../../utils/customHooks/useRandom";

const FlipCard = ({ children, w = "250px", h = "150px" }) => {
  
  const { random } = useRandom({ num: 5, infinite: true });

  return (
    <div
      className={`flip-card ${random === 0 ? "animation-on" : ""}`}
      style={{ width: w, height: h }}
    >
      <div className="flip-card-inner">{children}</div>
    </div>
  );
};

export default FlipCard;