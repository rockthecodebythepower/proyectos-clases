import React from 'react'
import { ListItem } from '../styles/components/ListItem'

const Emoji = ({ category, char, codes, name }) => {
  return (
    <ListItem>
      <div>{char}</div>
      <div>{codes}</div>
      <div>{name}</div>
      <div>{category}</div>
    </ListItem>
  )
}

export default Emoji