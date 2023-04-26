import React from 'react'
import { Button } from '../styles/components/Button'

const ClearFilterButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>🧼</Button>
  )
}

export default ClearFilterButton