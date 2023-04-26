import React, { useState } from "react";
import "./Alert.css";

const icons = {
  informative: "/assets/Alert_info.svg",
  success: "/assets/Alert_success.svg",
  warning: "/assets/Alert_warning.svg",
  danger: "/assets/Alert_danger.svg",
};

const Alert = ({
  icon,
  title = "Title",
  canClose,
  children = "Esto es una descripción por defecto",
  state = "informative",
}) => {

    const [visible, setVisible] = useState(true);

    const cerrar = () => {
        setVisible(false)
    }

  return (
    <div className={`alert ${!visible && "cerrado"}`}>
      <div className="div_title">
        {icon && <img src={icons[state]} />}
        <h4 className={state}>{title}</h4>
      </div>
      <p>{children}</p>
      {canClose && <img src="/assets/Alert_close.svg" className="close_alert_button" onClick={cerrar}/>}
    </div>
  );
};

export default Alert;
