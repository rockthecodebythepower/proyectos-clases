import { useRef } from "react";
import "./UserInfo.css";

const UserInfo = ({
  label,
  placeholder,
  reference,
  type,
  id,
  formState,
  setFormState,
  onImageChange
}) => {
  return (
    <div className="userinfo">
      <label htmlFor={id} className={type === "file" ? "labelGuay" : "input"}>
        {label}
      </label>
      <input
        id={id}
        className="input"
        placeholder={placeholder}
        ref={reference && reference}
        type={type ? type : "text"}
        onChange={(e) => {
          setFormState({ ...formState, [id]: e.target.value });
          onImageChange && onImageChange(e);
        }}
      />
    </div>
  );
};

export default UserInfo;
