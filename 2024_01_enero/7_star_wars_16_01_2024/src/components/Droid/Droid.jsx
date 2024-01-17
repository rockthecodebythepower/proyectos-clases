import "./Droid.css";

const Droid = ({ droid }) => {
  return (
    <div className="droid">
      <h3>{droid.name}</h3>
      <div>
        <img src={droid.image} alt={droid.name} />
      </div>
      <p>{droid.power}</p>
    </div>
  );
};

export default Droid;