import { Flex } from "@chakra-ui/react"
import Tablero from "./components/Tablero/Tablero";

function App() {

  //! localstorage para guardar las notas
  //! un array de notas -> estado (porque quiero que cuando añada una nota se re-renderice mi aplicación o componente donde tenemos todas las notas y se pinten las nuevas);

  return (
    <Flex minHeight="100vh" bg="bisque" justify="center" align="center">
      <Tablero/>
    </Flex>
  )
}

export default App
