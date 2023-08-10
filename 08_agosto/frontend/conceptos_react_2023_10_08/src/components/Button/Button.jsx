import "./Button.css";

//props -> size -> ["small", "base", "large"];
//props -> variant -> ["base", "link", "danger"]
const Button = ({ children, size = "base", variant = "base", action }) => {
  return (
    <button
      className={`btn ${size} ${variant}`}
      onClick={() => {
        action();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
