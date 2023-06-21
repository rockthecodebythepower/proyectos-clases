import "./Emojis.css"

const Emojis = ({ emojisFiltered }) => {
  return (
    <div className="emojis">
      {emojisFiltered.map((emoji) => (
        <p className="emoji" key={emoji.value}>
          {emoji.value}
        </p>
      ))}
    </div>
  );
};

export default Emojis;