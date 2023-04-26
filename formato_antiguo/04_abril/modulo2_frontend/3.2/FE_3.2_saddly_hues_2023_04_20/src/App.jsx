import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Palettes from "./components/Palettes/Palettes";
import usePalette from "./customHooks/usePalette";

function App() {
  const [colors, setColors] = useState([
    [244, 244, 244],
    [98, 166, 152],
    [238, 179, 70],
    [135, 113, 90],
    [56, 54, 61],
  ]);

  const { setPalettes, palettes, getRandomPalette } = usePalette();

  const [showPalette, setShowPalette] = useState(true);

  return (
    <div
      className="App"
      style={{
        backgroundColor:
          colors && `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`,
      }}
    >
      <Palettes
        setColors={setColors}
        setPalettes={setPalettes}
        palettes={palettes}
        showPalette={showPalette}
      />
      <Layout
        setColors={setColors}
        colors={colors}
        getRandomPalette={getRandomPalette}
        setShowPalette={setShowPalette}
        showPalette={showPalette}
      />
    </div>
  );
}

export default App;