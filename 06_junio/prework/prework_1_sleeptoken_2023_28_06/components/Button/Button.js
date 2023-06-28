import "./Button.css";

const Button = (text, variant) => {
  return `
  <button class=${variant === "active" ? "button-active" : ""}>${text}</button>
  `;
};

export default Button;
