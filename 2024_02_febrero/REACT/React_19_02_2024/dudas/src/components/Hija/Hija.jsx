import React from "react";
import "./Hija.css";

const Hija = React.memo(() => {
  console.log("SOY EL COMPONENTE HIJA Y ME RE-RENDERIZO");

  return <div className="hija">Hija</div>;
});

export default Hija;
