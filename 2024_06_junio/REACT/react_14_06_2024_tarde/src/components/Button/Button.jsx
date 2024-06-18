import "./Button.css";

const Button = ({ children }) => {
  return (
    <button className="button_main">{children}</button>
  )
}

export default Button