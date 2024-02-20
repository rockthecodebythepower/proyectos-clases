import "./Button.css";

const Button = ({
  children,
  funcion = () => {},
  disabled,
  type = "mainButton",
}) => {
  return (
    <button className={type} onClick={funcion} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
