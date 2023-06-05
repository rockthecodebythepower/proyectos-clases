import "./Button.css";

const Button = ({ texto = "Texto de ejemplo", emphasis = "high", p, disabled }) => {

    return (
        <button className={`${emphasis}_emphasis button`} style={{padding: p}} disabled={disabled}>
            { texto }
        </button>
    )

}

export default Button;