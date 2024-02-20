import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Children from "./components/Children/Children";

//! estoy repitiendo código en algún momento? - 99% necesitaré componentizar

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </div>
      {page === "home" ? <Home /> : <About />}
      <div className="buttons">
        <Button funcion={() => alert("Has pinchado el botón del texto")}>
          Texto
        </Button>
        <Button
          funcion={() => alert("Me hiciste click!")}
          type="secondaryButton"
        >
          Hazme click!
        </Button>
        <Button disabled type="tertiaryButton">
          No tengo función
        </Button>

        <Children/>
        <Children>Texto</Children>
        <Children>
          <div>
            <ul>
              <li>
                <a>Texto de enlace</a>
              </li>
            </ul>
          </div>
        </Children>
      </div>
    </div>
  );
};

export default App;
