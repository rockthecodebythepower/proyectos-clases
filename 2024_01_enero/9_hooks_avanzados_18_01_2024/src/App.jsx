import "./App.css"
import Card from "./components/Card/Card"
import UseCallback from "./components/UseCallback/UseCallback"
import UseMemo from "./components/UseMemo/UseMemo"
import UseReducer from "./components/UseReducer/UseReducer"
import UseRef from "./components/UseRef/UseRef"

const App = () => {
  return (
    <div className="app">
      {/* <UseReducer/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      <UseRef/>
      <Card/>
    </div>
  )
}


//! useEffect para efectos secundarios, como peticiones a una API
//! useMemo para memoizar calculos complejos
//! useCallback para mantener la declaración de una función en el renderizado del componente y no tener que volver a declararla
export default App