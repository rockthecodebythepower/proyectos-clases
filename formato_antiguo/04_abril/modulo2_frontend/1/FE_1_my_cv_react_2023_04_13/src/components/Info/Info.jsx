import React from 'react'
import "./Info.css"

const Info = ({ cv }) => {
  return (
    <h3 className='info'>{ cv.info }</h3>
  )
}

export default Info