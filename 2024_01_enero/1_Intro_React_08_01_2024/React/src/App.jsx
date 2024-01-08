import "./App.css";
import DivMulticolor from "./components/DivMulticolor/DivMulticolor";

//! estas funciones (los componentes) van a retornar contenido de JSX

function App() {
  console.log("este console.log se ve?");

  //! si ponemos llaves dentro del jsx estamos indicando que dentro de esas llaves irá contenido de javascript

  const nombre = "Alexis";

  return (
    <div>
      <h1>Hello World!</h1>
      <DivMulticolor nombre={nombre} apellido="García"/>
      <DivMulticolor nombre="Virginia" apellido="Sánchez"></DivMulticolor>
      <DivMulticolor nombre="Pablo"/>
    </div>
  );
}

export default App;
