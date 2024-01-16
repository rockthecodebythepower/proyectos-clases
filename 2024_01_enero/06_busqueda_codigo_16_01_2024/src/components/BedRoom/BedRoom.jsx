import { useEffect, useState } from "react";
import Candle from "../Candle/Candle";
import "./BedRoom.css";

const ordenVelas = [4, 2, 6, 3, 1, 5];

const BedRoom = () => {
  const [luminosity, setLuminosity] = useState(0);
  const [orden, setOrden] = useState([]);
  const [off, setOff] = useState(true);
  const [completado, setCompletado] = useState(false);

  const reset = () => {
    setLuminosity(0);
    setOrden([]);
    setOff(true);
  };

  useEffect(() => {
    if (orden.length === 6 && orden.join() === ordenVelas.join()) {
      setCompletado(true);
    }
  }, [orden]);

  return (
    <div className="bedroom">
      <Candle
        top="38px"
        left="441px"
        id={1}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <Candle
        top="102px"
        left="418px"
        id={2}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <Candle
        top="68px"
        left="487px"
        id={3}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <Candle
        top="103px"
        left="667px"
        id={4}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <Candle
        top="54px"
        left="625px"
        id={5}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <Candle
        top="68px"
        left="707px"
        id={6}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        orden={orden}
        setOrden={setOrden}
        off={off}
        setOff={setOff}
      />
      <div className="img_wrp">
        <div className="window" onClick={reset}></div>
        {completado && <p className="resolucion">1</p>}
        <div
          className="dark"
          style={{ background: `var(--rtc-dark-${luminosity})` }}
        ></div>
        <img src="/assets/BedRoom/BedRoom.jpeg" />
      </div>
    </div>
  );
};

export default BedRoom;
