import { useEffect, useRef, useState } from "react";

export const useRandom = ({ num, infinite = false }) => {
  const [random, setRandom] = useState(Math.floor(Math.random() * num));
  const timerRandom = useRef(Math.floor(Math.random() * 1000) + 1000);

  useEffect(() => {
    if (infinite) {
        setTimeout(() => {
            let randomPrueba = Math.floor(Math.random() * num);
            while (randomPrueba === random) {
              randomPrueba = Math.floor(Math.random() * num);
            }
            setRandom(randomPrueba);
          }, timerRandom.current);
    }
  }, [random]);

  return { random };

};