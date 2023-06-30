import React from 'react'
import { CharactersWrp } from './Characters.styles';
import Character from '../Character/Character';

const Characters = ({ data }) => {

  return (
    <CharactersWrp>
        {data && data.map((character) => <Character character={character} key={character.id}/>)}
    </CharactersWrp>
  )
}

export default Characters