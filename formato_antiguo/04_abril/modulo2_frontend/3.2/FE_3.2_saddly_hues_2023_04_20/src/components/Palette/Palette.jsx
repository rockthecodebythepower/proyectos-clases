import React from "react";
import "./Palette.css";

const Palette = ({ palette, setColors }) => {

  return (
    <div className="palette" style={{backgroundColor: `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`}} onClick={() => setColors([...palette])}>
      {palette.map((color) => {
        return (
          <div
            key={color}
            className="color"
            style={{
              backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Palette;
