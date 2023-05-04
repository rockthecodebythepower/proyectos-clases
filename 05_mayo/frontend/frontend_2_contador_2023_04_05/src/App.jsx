import "./App.css";
import Contadores from "./components/Contadores/Contadores";
import Header from "./components/Header/Header";
import ContadoresProvider from "./context/contadoresContext";

function App() {
  return (
    <>
      <ContadoresProvider>
        <Header />
        <Contadores />
      </ContadoresProvider>
    </>
  );
}

export default App;
