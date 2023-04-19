import React from 'react'
import "./Badge.css"

const Badge = ({ children = "Texto", size = "m", state }) => {
  return (
    <div className={`badge ${size} ${state}`}>
        <p>{children.toUpperCase()}</p>
    </div>
  )
}

export default Badge