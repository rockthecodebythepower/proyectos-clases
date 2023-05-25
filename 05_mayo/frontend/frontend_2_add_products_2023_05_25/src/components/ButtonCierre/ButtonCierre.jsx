import "./ButtonCierre.css";

const ButtonCierre = ({ funcion, posicion }) => {
  return (
    <button
      onClick={funcion}
      type="button"
      className="button-cierre"
      style={{
        right: posicion === "right" && "20px",
        left: posicion === "left" && "20px",
      }}
    >
      X
    </button>
  );
};

export default ButtonCierre;
