import React from 'react'
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact";

export const ChangeOption = ({ page }) => {
  return (
    <>
        {page === "home" && <Home/>}
        {page === "about" && <About/>}
        {page === "contact" && <Contact/>}
    </>
  )
}