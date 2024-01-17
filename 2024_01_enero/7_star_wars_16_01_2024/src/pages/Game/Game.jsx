import { useEffect, useState } from "react";
import "./Game.css";
import { getPower } from "../../utils/getPower";
import Droid from "../../components/Droid/Droid";

const Game = () => {
  const [droid1, setDroid1] = useState();
  const [droid2, setDroid2] = useState();
  const [droids, setDroids] = useState([]);

  useEffect(() => {
    fetch(
      "https://starwars-databank-server.vercel.app/api/v1/droids?page=1&limit=60"
    )
      .then((res) => res.json())
      .then((res) => {
        setDroids(res.data);
        setDroid1(
          getPower(res.data[Math.floor(Math.random() * res.data.length)])
        );
        setDroid2(
          getPower(res.data[Math.floor(Math.random() * res.data.length)])
        );
      });
  }, []);

  const fight = () => {
    if (droid2.power > droid1.power) {
      setDroid1({
        name: "",
        image:
          "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif",
        power: "",
        description: "",
      });
      setTimeout(() => {
        setDroid1(getPower(droids[Math.floor(Math.random() * droids.length)]));
      }, 2000);
    } else {
      setDroid2({
        name: "",
        image:
          "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif",
        power: "",
        description: "",
      });
      setTimeout(() => {
        setDroid2(getPower(droids[Math.floor(Math.random() * droids.length)]));
      }, 2000);
    }
  };

  return (
    <div className="game">
      {droid1 && <Droid droid={droid1} />}
      <button onClick={fight}>VS</button>
      {droid2 && <Droid droid={droid2} />}
    </div>
  );
};

export default Game;