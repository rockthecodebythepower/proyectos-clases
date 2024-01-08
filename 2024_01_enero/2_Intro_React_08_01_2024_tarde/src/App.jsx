import "./App.css";
import Button from "./components/Button/Button";
import DivMulticolor from "./components/DivMulticolor/DivMulticolor";
import Props from "./components/Props/Props";

const App = () => {
  const array = ["Manu", "Jeniffer", "Vicente", "Luca", "Nama", "Virginia"];

  /* retornar contenido de JSX */
  /* JSX - es la mezcla de HTML y JS */

  return (
    <div className="app">
      {/* <h1>Soy el h1 de app</h1>
      <ul>
        {array.map((elemento) => (
          <li
            className={elemento.length > 6 ? "largo" : "corto"}
            key={elemento}
          >
            {elemento}
            {elemento.length <= 6 && <span> Esto es un nombre corto </span>}
            <Button
              funct={() => {
                alert("Hola " + elemento + "!");
              }}
            >
              Saludar
            </Button>
          </li>
        ))}
      </ul>
      <h1>texto va dentro de la etiqueta</h1>
      <Button size="s" >Crear</Button>
      <Button size="l">Actualizar</Button>
      <Button>Eliminar</Button>
      <Button />
      <Button />
      <Props clave="valor" persona={{ nombre: "Jeniffer" }}>
        Esto es texto plano
      </Props> */}
      <DivMulticolor/>
      <h1>Soy un h1</h1>
    </div>
  );
};

export default App;