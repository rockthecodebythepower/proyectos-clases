import "./Button.css";

const Button = ({ category, selected, onClick }) => {
  const className = selected ? "selected" : "";

  return (
    <button className={className} onClick={onClick}>
      {category}
    </button>
  );
};

export default Button;
