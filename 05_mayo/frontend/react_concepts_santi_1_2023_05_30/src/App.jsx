import "./App.css";
import Header from "./components/Header/Header";
import Persona from "./components/Persona/Persona";
import { personas } from "./data/personas";

function App() {
  return (
    <>
      <Header />
      <div className="personas">
        {personas.map((persona) => {
          {/* Envío de props al componente Persona */}
          return <Persona key={persona.nombre} persona={persona}/>;
        })}
      </div>
    </>
  );
}

export default App;
