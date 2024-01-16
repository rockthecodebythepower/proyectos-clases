import { useState } from "react";
import "./Attic.css";
import Bill from "../Bill/Bill";

const Attic = () => {
  const [modal, setModal] = useState(false);
  const [modalBillete, setModalBillete] = useState(false);
  const [modalLibro, setModalLibro] = useState(false);

  return (
    <div className="attic">
      {modal && (
        <div className="modal-caja">
          <h2>Introducir código</h2>
          <p onClick={() => setModal(false)}>X</p>
          <div>
            <input maxLength={1} type="number" />
            <input maxLength={1} type="number" />
            <input maxLength={1} type="number" />
            <input maxLength={1} type="number" />
          </div>
          <button>Intentar abrir la caja</button>
        </div>
      )}
      {modalBillete && <Bill />}
      {modalLibro && (
        <div className="libro_modal">
          <p>A veces las letras pueden convertirse en números</p>
          <p>Muchos de los caminos nos llevarán al mismo punto</p>
          {/* <p>Las posiciones son un número menos que la longitud</p> */}
          <img src="/assets/Attic/Libro.webp" />
        </div>
      )}
      <div className="caja-fuerte" onClick={() => setModal(true)}></div>
      <div
        className="billete-premio"
        onClick={() => setModalBillete(!modalBillete)}
      ></div>
      <div className="libro" onClick={() => setModalLibro(!modalLibro)}></div>
      <img src="/assets/Attic/Attic.jpg" />
    </div>
  );
};

export default Attic;
