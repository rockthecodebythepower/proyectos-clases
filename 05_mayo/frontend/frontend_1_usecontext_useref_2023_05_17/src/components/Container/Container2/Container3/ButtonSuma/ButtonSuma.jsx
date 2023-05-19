import React, { useContext } from "react";
import { Context } from "../../../../../context/context";

const ButtonSuma = () => {
  const { setNum, num, info } = useContext(Context);

  return (
    <>
      <button onClick={() => setNum(num + 1)} className="button_suma">
        +
      </button>
      <p>{info}</p>
    </>
  );
};

export default ButtonSuma;
