import React from 'react'
import "./Home.css"

const Home = ({isDarkProp}) => {

    console.log("SOY HOME Y ME RE-RENDERIZO");

  return (
    <div className={isDarkProp ? "home home__dark" : "home home__light"}>
        <div className='portada'>
            <div className={isDarkProp ? "portada-1 portada-div__dark" : "portada-1"}></div>
            <div className={isDarkProp ? "portada-2 portada-div__dark" : "portada-2"}></div>
            <div className={isDarkProp ? "portada-3 portada-div__dark" : "portada-3"}></div>
            <div className={isDarkProp ? "portada-4 portada-div__dark" : "portada-4"}></div>
            <div className={isDarkProp ? "portada-5 portada-div__dark" : "portada-5"}></div>
        </div>
        <h1 className={isDarkProp ? "h1__dark" : ""}>CRM DE KIOSKO MANOLITA</h1>
    </div>
  )
}

export default Home