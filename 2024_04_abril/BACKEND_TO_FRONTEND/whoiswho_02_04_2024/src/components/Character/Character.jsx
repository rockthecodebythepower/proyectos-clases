import {
  matar,
  selectCharacter,
} from "../../reducer/WhoIsWho/whoiswho.actions";
import "./Character.css";

const Character = ({ name, img, vivo, dispatch, state }) => {
  return (
    <div className="character-container">
      {vivo && (
        <img
          src="/assets/pistola.png"
          onClick={() => matar(dispatch, name, state)}
        />
      )}
      {!vivo && <img className="sangre" src="/assets/sangre.png" />}
      <div
        className={`character ${!vivo ? "muerto" : ""}`}
        onClick={() => vivo && selectCharacter(dispatch, name, state)}
      >
        <div>
          <img src={img} />
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Character;
