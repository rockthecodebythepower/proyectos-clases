import React, { useEffect, useState } from "react";
import "./Palettes.css";
import Palette from "../Palette/Palette";

const model = { model: "ui" };

const Palettes = ({ setColors, setPalettes, palettes, showPalette }) => {

  const getPalettes = async () => {
    const palettesArray = [];

    for (let i = 0; i < 30; i++) {
      const resultado = await fetch("http://colormind.io/api/", {
        method: "POST",
        body: JSON.stringify(model),
      });
      const res = await resultado.json();
      palettesArray.push([...res.result]);
    }

    setPalettes([...palettes, ...palettesArray]);
  };

  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <div className={showPalette ? "palettes mostrarPalette" : "palettes"}>
      {palettes.length !== 1 ? (
        palettes.map((palette) => (
          <Palette
            key={JSON.stringify(palette)}
            palette={palette}
            setColors={setColors}
          />
        ))
      ) : (
        <img
          src="https://global.discourse-cdn.com/business7/uploads/streamlit/original/2X/2/247a8220ebe0d7e99dbbd31a2c227dde7767fbe1.gif"
          alt="loading rocket"
          className="rocket"
        />
      )}
    </div>
  );
};

export default Palettes;
