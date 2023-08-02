import "./Button.css";

//type -> ["primary", "secondary", "warning", "error"]
//size -> ["normal", "small", "large"]

const Button = ({ children, type = "primary", size = "normal", action }) => {
  return (
    <button className={`btn ${type} ${size}`} onClick={() => action()}>
      {children}
    </button>
  );
};

export default Button;
