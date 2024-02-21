import { Button } from "../Button/Button";
import "./Alert.css";

export const Alert = ({
  text = "Esto es sólo un mensaje de ejemplo",
  title = "Ejemplo",
  buttonText = "Ejemplo",
  icon = "/assets/icons/error.png",
}) => {
  if (document.querySelector(".overlay")) {
    return;
  }

  const overlay = document.createElement("div");
  const alert = document.createElement("div");
  const alertIcon = document.createElement("img");
  const alertTitle = document.createElement("h2");
  const alertText = document.createElement("p");

  alertIcon.src = icon;
  alertTitle.textContent = title;
  alertText.textContent = text;

  overlay.classList.add("overlay");
  alert.classList.add("alert");
  alertIcon.classList.add("icon");

  document.body.append(overlay);
  overlay.append(alert);
  alert.append(alertIcon);
  alert.append(alertTitle);
  alert.append(alertText);
  Button({
    text: buttonText,
    funcion: () => {
      overlay.remove();
    },
    nodoPadre: alert,
  });
};
