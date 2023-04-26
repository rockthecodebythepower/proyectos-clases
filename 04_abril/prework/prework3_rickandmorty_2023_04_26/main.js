import "./style.css"
import {printTemplate as Header} from "./components/Header/Header"
import {printTemplate as Footer} from "./components/Footer/Footer"
import {printTemplate as Home} from "./pages/Home/Home"
import {printTemplate as Characters} from "./pages/Characters/Characters"
import {printTemplate as About} from "./pages/About/About"
import {linkPage} from "./utils/linkPage"

Header()
Home()
Footer()

linkPage("#homelink", Home)
linkPage("#characterslink", Characters)
linkPage("#aboutlink", About)
