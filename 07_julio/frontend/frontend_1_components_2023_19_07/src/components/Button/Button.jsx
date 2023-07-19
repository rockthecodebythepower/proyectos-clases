import "./Button.css";

//props -> variant ["primary", "secondary", "warning", "danger"]
//props -> size ["small", "base", "large", "xl"]
const Button = ({ children, variant = "primary", size = "base", action }) => {
  return <button className={`${variant} ${size}`} onClick={action}>{children}</button>;
};

export default Button;
