import "./App.css";
import Image from "./components/Image/Image";
import { IMAGES } from "./data/imagenes";

// necesito una aplicación que me muestre por pantalla varias imágenes y que cuando le haga click a una imagen esa en concreto se redondee, si le vuelvo a dar click se quita el redondeo.

// Necesitamos en total sin contar con app ni main 2 componentes

function App() {

  return (
    <>
      <div>
        {IMAGES.map((image) => <Image key={image} img={image}/>)}
      </div>
    </>
  );
}

export default App;
