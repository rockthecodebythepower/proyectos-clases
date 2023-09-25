import { useEffect, useState } from 'react'
import './App.css'
import { Flex } from '@chakra-ui/react';
import Ranking from './components/Ranking/Ranking';
import Game from './components/Game/Game';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/api/v1/users");
    const res = await response.json();
    setUsers([...res]);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Flex h="100svh" justify="center" align="center" backgroundColor="blackAlpha.800">
        <Ranking users={users}/>
        <Game />
      </Flex>
    </>
  )
}

export default App
