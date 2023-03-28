import "./Input.css";

const Input = ({ handleChange }) => {
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search by album name or artist"
    />
  );
};

export default Input;
