import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const About = () => {

    const { id } = useParams();
    const navigate = useNavigate();

  return (
    <div style={{background: "black", height: "100svh", color: "white", paddingTop: "10svh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link to="/">{id}</Link>
    </div>
  )
}

export default About