import "./Button.css";

const Button = ({ children = "Texto del Botón", funct = () => {}, size = "m" }) => {

    return (
        <button className={`btn ${size}`} onClick={funct}>{ children }</button>
    )
}

export default Button;