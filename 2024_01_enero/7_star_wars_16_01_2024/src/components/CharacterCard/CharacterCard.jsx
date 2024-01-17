import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="cortina">
        <h2>{character.name}</h2>
      </div>
      <div className="img_wrp">
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default CharacterCard;
