import "./OpenForm.css";

const OpenForm = ({ titulo, funcion, posicion }) => {
  return (
    <div
      className="open-form"
      style={{
        right: posicion === "right" && "20px",
        left: posicion === "left" && "20px",
      }}
    >
      <img src="/assets/formulario.png" onClick={funcion} />
      <h3>{titulo}</h3>
    </div>
  );
};

export default OpenForm;
