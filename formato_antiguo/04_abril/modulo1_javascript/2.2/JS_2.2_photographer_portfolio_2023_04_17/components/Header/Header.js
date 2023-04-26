import "./Header.css"
import {searchPhotos} from "../../utils/fetchData"

const template = () => {
  return `
    <nav>
    <h1>P</h1>
    <ul id="navlinks">
      <li>
        <a href="#" id="homelink">Home</a>
      </li>
      <li>
        <a href="#" id="gallerylink">Gallery</a>
      </li>
      <li>
        <a href="#" id="aboutlink">About</a>
      </li>
    </ul>
    <div id="mobilelinks">
    <button id="hamburgerBtn">☰</button>
    <ul id="mobileanchors" class="mobileanchors">
      <li>
        <a href="#" id="homelink">Home</a>
      </li>
      <li>
        <a href="#" id="gallerylink">Gallery</a>
      </li>
      <li>
        <a href="#" id="aboutlink">About</a>
      </li>
    </ul>
    </div>
  </nav>
  <div id="banner">
  
  </div>
    `
}

const printPhoto = (photos) => {
  const randomPhoto = Math.floor(Math.random() * photos.length)
  document.querySelector("#banner").innerHTML = `
  <img src=${photos[randomPhoto].urls.raw} alt=${photos[randomPhoto].alt_description} />
  `

  //Recuperar la variabel highlight y le vamos a aplicar el color de la foto

  const root = document.documentElement
  root.style.setProperty("--highlight", photos[randomPhoto].color)
}

const listeners = async () => {
  const words = [
    "Space",
    "Dog",
    "Cyberpunk",
    "Web Developer",
    "Tokio Lights",
    "Thunder",
  ]

  const randomWord = words[Math.floor(Math.random() * words.length)]
  const photos = await searchPhotos(randomWord)
  printPhoto(photos.response.results)

  document.querySelector("#hamburgerBtn").addEventListener("click", () => {
    document.querySelector("#mobileanchors").classList.toggle("showmobilelinks")
  })
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
  listeners()
}
