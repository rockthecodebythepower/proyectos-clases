import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="number"
        onInput={(ev) => setNum(parseInt(ev.target.value))}
      />
      <h2>{num + 20}</h2>
    </div>
  );
};

export default Input;
