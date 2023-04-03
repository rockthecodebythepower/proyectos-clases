import React from 'react'
import Emoji from './Emoji'
import { UnorderedList } from '../styles/components/UnorderedList'

const EmojiList = ({ emojis }) => {
  return (
    <UnorderedList>
      {emojis.map(({ category, char, codes, name }) => (
        <Emoji key={codes} char={char} name={name} category={category} />
      ))}
    </UnorderedList>
  )
}

export default EmojiList