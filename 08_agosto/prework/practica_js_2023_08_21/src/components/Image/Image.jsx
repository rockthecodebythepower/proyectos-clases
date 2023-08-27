import "./Image.css";
import { useState } from "react";

const Image = ({ img }) => {

  const [form, setForm] = useState("square");

  return (
    <div>
      <img
        onClick={() =>
          form === "square" ? setForm("circle") : setForm("square")
        }
        className={form}
        src={img}
      />
    </div>
  );
};

export default Image;
