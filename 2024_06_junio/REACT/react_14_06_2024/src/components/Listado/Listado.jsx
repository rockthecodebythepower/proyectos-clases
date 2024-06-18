import { useState } from "react";
import "./Listado.css";

const Listado = ({ color }) => {
  // ESTADOS
  const [toggle, setToggle] = useState(false);

  const clickado = () => {
    setToggle(!toggle);
  };

  return (
    <ul
      style={{ backgroundColor: color }}
      className={toggle ? "br" : "nobr"}
      onClick={clickado}
    >
      {toggle ? (
        <>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </>
      )}
    </ul>
  );
};

export default Listado;
