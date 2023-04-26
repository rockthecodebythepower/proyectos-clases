import React from "react";
import "./Header.css"

const Header = ({ rgb, setShowPalette, showPalette, setMostrarColores, mostrarColores }) => {
  return (
    <div className="layout-header">
      <div className="layout-header_left">
        <div className="icons">
          <img
            className="icon"
            src="/assets/triste.png"
            style={{backgroundColor: rgb.primary}}
          />
          <div
            className="ball"
            style={{backgroundColor: rgb.secondary}}
          ></div>
          <div
            className="ball"
            style={{ backgroundColor: rgb.terciary }}
          ></div>
        </div>
        <h3 style={{color: rgb.quintuary}}> Saddly Hues </h3>
      </div>
      <div className="layout-header_right">
        <h4
          style={{ color: rgb.quintuary }}
          onClick={() => setShowPalette(!showPalette)}
        >
          Toggle palettes
        </h4>
        <h4
          style={{ color: rgb.quintuary }}
          onClick={() => setMostrarColores(!mostrarColores)}
        >
          Toggle section colors
        </h4>
      </div>
    </div>
  );
};

export default Header;