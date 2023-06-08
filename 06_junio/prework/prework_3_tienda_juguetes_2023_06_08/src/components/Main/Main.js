import { initCajas } from "../Cajas/Cajas";
import { initConstrucciones } from "../Construcciones/Construcciones";
import "./Main.css"

export const initMain = (pintar) => {

    if (pintar === "Construcciones") {
        initConstrucciones();
    } else {
        initCajas();
    }

}