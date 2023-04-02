import React from 'react'
import { Input } from '../styles/components/Input'

const InputFilter = ({ onChange, value }) => {
  return (
    <>
      <Input
        type="text"
        placeholder='Filter...⚙️'
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default InputFilter