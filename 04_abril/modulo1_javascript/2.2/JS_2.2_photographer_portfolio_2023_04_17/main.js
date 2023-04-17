import "./style.css"

import {printTemplate as Header} from "./components/Header/Header"
import {printTemplate as Aside} from "./components/Aside/Aside"
import {printTemplate as Gallery} from "./pages/Gallery/Gallery"
import {printTemplate as Home} from "./pages/Home/Home"
import {printTemplate as About} from "./pages/About/About"
import {printTemplate as Footer} from "./components/Footer/Footer"

import {linkPage} from "./utils/linkPage"

Header()
Aside()

//La página que se renderiza al arrancar
Home()

//Añadimos los eventos click a los link para que pinten las diferentes páginas
linkPage("#homelink", Home)
linkPage("#gallerylink", Gallery)
linkPage("#aboutlink", About)
