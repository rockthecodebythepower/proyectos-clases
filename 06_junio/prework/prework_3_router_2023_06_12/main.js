import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {router, addListeners} from "./router";

//Renderizamos los componentes estáticos
Header();
Footer();

//Arrancamos el router
router();
addListeners();
