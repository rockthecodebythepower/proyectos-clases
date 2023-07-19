import "./Text.css";

//props -> variant: ["primary", "secondary", "warning", "danger"]
//pops -> size: ["small", "base", "large", "xl"]
const Text = ({ children, variant = "primary", size = "base" }) => {
  return <p className={`${variant} ${size}`}>{children}</p>;
};

export default Text;
