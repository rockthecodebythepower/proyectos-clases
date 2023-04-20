import { useState } from "react";

const usePalette = () => {
  const [palettes, setPalettes] = useState([
    [
      [157, 213, 192],
      [76, 99, 139],
      [46, 46, 98],
      [71, 36, 46],
      [194, 123, 35],
    ],
  ]);

  const getRandomPalette = () => {
    return palettes[Math.round(Math.random() * (palettes.length - 1))];
  };

  return {
    setPalettes,
    palettes,
    getRandomPalette,
  };
};

export default usePalette;
