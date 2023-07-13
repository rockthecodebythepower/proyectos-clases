import { Flex } from '@chakra-ui/react'
import './App.css'
import Tablero from './components/Tablero/Tablero'

function App() {

  return (
    <Flex h="100svh" bg="var(--background)" justify="center" align="center"> 
      <Tablero/>
    </Flex>
  )
}

export default App
