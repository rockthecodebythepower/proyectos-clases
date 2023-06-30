import React from 'react'
import { CharacterWrp, Image, ImgWrp, Name } from './Character.styles'

const Character = ({ character }) => {

  return (
    <CharacterWrp>
        <ImgWrp>
            <Image src={character.image}/>
        </ImgWrp>
        <Name $status={character.status}>{character.name}</Name>
    </CharacterWrp>
  )
}

export default Character