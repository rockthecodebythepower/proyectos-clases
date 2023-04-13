import React from "react";
import "./ImagenPerfil.css";

const ImagenPerfil = ({ cv }) => {

  return (
    <div className="img_wrp">
      <img
        src={cv.imagen}
        alt="imagen del cv"
      />
    </div>
  );
};

export default ImagenPerfil;
