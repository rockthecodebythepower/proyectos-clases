import "./App.css";
import FormularioLibreria from "./components/FormularioLibreria/FormularioLibreria";
import FormularioNativo from "./components/FormularioNativo/FormularioNativo";
import Productos from "./components/Productos/Productos";
import { ProductProvider } from "./context/Context";

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <FormularioLibreria />
        <FormularioNativo />
        <Productos />
      </div>
    </ProductProvider>
  );
}

export default App;
