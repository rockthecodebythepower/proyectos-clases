import "./Button.css";

const types = ["primary", "secondary", "tertiary"];

const Button = ({
  children = "texto de ejemplo",
  funcion,
  grados = 0,
  type = "primary",
}) => {
  let finalType = type;

  if (!types.includes(type)) {
    finalType = "primary";
  }

  return (
    <button
      className={`btn ${finalType}`}
      onClick={funcion}
      style={{ transform: `rotate(${grados}deg)` }}
      on
    >
      {children}
    </button>
  );
};

export default Button;
