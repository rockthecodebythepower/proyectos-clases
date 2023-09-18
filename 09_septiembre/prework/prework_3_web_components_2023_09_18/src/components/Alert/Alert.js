import "./Alert.css";

import info from "./assets/info.png";
import success from "./assets/success.png";
import warning from "./assets/warning.png";
import error from "./assets/error.png";

const images = {
  info: info,
  success: success,
  warning: warning,
  error: error
}

export const Alert = ({
  type = "info",
  title = "Titulo por defecto",
  description = "Esto es una descripción de ejemplo, prueba a poner tu propia descripción",
  position = "right_top",
}) => {
  const alertDiv$$ = document.createElement("div");

  alertDiv$$.classList.add("alert");
  alertDiv$$.classList.add(position);
  alertDiv$$.style.backgroundColor = `var(--${type}-background-alert)`;
  alertDiv$$.style.borderColor = `var(--${type}-border-alert)`;

  alertDiv$$.innerHTML = `
        <img src="${images[type]}"/>
        <h3>${title}</h3>
        <p>${description}</p>
    `;

  document.body.append(alertDiv$$);

  setTimeout(() => {
        alertDiv$$.classList.add("fadeout");
        setTimeout(() => {
            alertDiv$$.remove();
        }, 1000);
    }, 5000);
};