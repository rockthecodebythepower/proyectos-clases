import { createContext, useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//      argumentos -> componentes van a ser props
const App = () => {
  const nombreUsuario = "Manu";

  const Context = createContext();

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <Context.Provider value={{numero, setNumero}}>
        <Header nombre="lasdkfl"/>
        <Main nombre={nombreUsuario}></Main>
        <footer></footer>
      </Context.Provider>
    </div>
  );
};

export default App;
