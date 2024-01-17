import React, { useContext } from "react";
import "./App.css"
import Hijo1 from "./components/Hijo1/Hijo1";
import { AppContext } from "./Providers/AppContext";

const App = () => {

  const { mode } = useContext(AppContext);

  return (
    <div className={`app ${mode}`}>
      <Hijo1/>
    </div>
  )
}

export default App;