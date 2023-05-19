import React, { useContext } from 'react'
import { Context } from '../../../../../../context/context'

const Text = () => {

    const { num } = useContext(Context);

  return (
    <div className='text'>{num}</div>
  )
}

export default Text