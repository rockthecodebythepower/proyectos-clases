import React, { useState } from "react";
import "./Layout.css";
import Button from "../Button/Button";
import Header from "./Header/Header";

const Layout = ({
  setColors,
  colors,
  getRandomPalette,
  setShowPalette,
  showPalette,
}) => {
  const [mostrarColores, setMostrarColores] = useState(true);

  const rgb = {
    primary: `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`,
    secondary: `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`,
    terciary: `rgb(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]})`,
    quartuary: `rgb(${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]})`,
    quintuary: `rgb(${colors[4][0]}, ${colors[4][1]}, ${colors[4][2]})`,
  };

  return (
    <div className="layout">
      <Header
        setMostrarColores={setMostrarColores}
        mostrarColores={mostrarColores}
        setShowPalette={setShowPalette}
        showPalette={showPalette}
        rgb={rgb}
      />
      <div className="layout-main">
        <div className="layout-main_left">
          <h1 style={{color: rgb.quintuary}}>
            Curated colors in context.
          </h1>
          <p style={{color: rgb.quartuary}}>
            Not sure what colors to use in your designs or where to use them?
            Saddly Hues is a color palette inspiration site that acts as a real
            worl example as to how the colors could be used in your design
            projects.
          </p>
          <button
            className="aleatorio"
            style={{backgroundColor: rgb.terciary, color: rgb.primary}}
            onClick={() => setColors(getRandomPalette())}
          >
            Try changing the palette!
          </button>
        </div>
        <div className="layout-main_right"></div>
      </div>
      <div className={mostrarColores ? "layout-colors mostrar" : "layout-colors"}>
        <div>
          <h2
            className="section-hues"
            style={{color: rgb.quintuary}}
          >
            This sections hues
          </h2>
          <p
            style={{color: rgb.quintuary}}
          >
            Click to copy the rgb code to your clipboard
          </p>
        </div>
        <div className="elements">
          <h4 style={{color: rgb.quintuary}}>
            Elements
          </h4>
          <div className="botones">
            {colors.map((color, index) => {
              return <Button key={color} color={color} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;