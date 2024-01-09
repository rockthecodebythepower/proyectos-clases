import "./App.css";
import Button from "./components/Button/Button";
import Texto from "./components/Texto/Texto";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Button type="secondary">Login</Button>
      <Button type="tertiary">Hola</Button>
      <Button funcion={() => alert("Esto mola")}>Que guay</Button>
      <Button>Login</Button>
      <Button type="paquito"></Button>
      <Texto>
        Esto se llama children, porque está dentro de las etiquetas del
        componente
      </Texto>

      <img
        src="https://decider.com/wp-content/uploads/2016/06/homer.jpg?quality=80&strip=all&w=646&h=431&crop=1"
        onMouseOver={() => {
          console.log("Estoy entrando con el ratón por encima de la imagen");
        }}
        onMouseLeave={() => {
          console.log("Estoy saliendo");
        }}
      />
    </div>
  );
};

export default App;
