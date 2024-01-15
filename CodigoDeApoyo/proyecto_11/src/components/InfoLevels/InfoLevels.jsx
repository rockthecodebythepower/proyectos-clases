import "./InfoLevels.css";

const InfoLevels = ({ levels, points }) => {
  return (
    <div className="info">
      <p className="level">Nivel {levels}</p>
      <p className="points">Puntos {points}</p>
    </div>
  );
};

export default InfoLevels;
