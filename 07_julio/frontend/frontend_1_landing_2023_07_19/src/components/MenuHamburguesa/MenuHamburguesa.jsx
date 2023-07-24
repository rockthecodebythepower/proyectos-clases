import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./MenuHamburguesa.css"

const MenuHamburguesa = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <img className="toggle" src="./assets/hamburguesa.png" onClick={() => setIsOpen(!isOpen)}/>
        <div id="hamburguesa" className={isOpen ? "isOpen" : "isClosed"}>
            <Navbar column isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    </>
  )
}

export default MenuHamburguesa