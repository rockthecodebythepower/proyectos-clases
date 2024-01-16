import { useEffect, useState } from "react";
import "./Candle.css";

const Candle = ({
  top,
  left,
  luminosity,
  setLuminosity,
  id,
  orden,
  setOrden,
  off,
  setOff,
}) => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (off) {
      setLight(false);
    }
  }, [off]);

  const changeCandleState = () => {
    if (light === false) {
      setLuminosity(luminosity + 1);
      setOrden([...orden, id]);
      setOff(false);
    } else {
      /* setLuminosity(luminosity - 1); */
    }
    setLight(true);
  };

  return (
    <div
      className="candle"
      style={{ top: top, left: left }}
      onClick={() => changeCandleState()}
    >
      {light && <img className="fire" src="/assets/BedRoom/fire.gif" />}
    </div>
  );
};

export default Candle;
