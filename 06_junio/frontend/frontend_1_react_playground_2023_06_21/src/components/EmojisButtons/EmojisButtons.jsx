import "./EmojisButtons.css";

const EmojisButtons = ({ types, filtrar }) => {
  return (
    <div className="buttons_emojis">
      {types.map((type) => (
        <button key={type} onClick={() => filtrar(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

export default EmojisButtons;