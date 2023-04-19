import "./Gallery.css"
import {template as Card} from "../Card/Card"
import {searchPhotos} from "../../utils/searchPhotos"

const template = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = ""
  for (const item of items) {
    gallery.innerHTML += Card(item)
  }
}

const listeners = async () => {
  const input = document.querySelector("#searchinput")
  const btn = document.querySelector("#searchbtn")
  btn.addEventListener("click", async () => {
    const images = await searchPhotos(input.value)
    printItems(images.response.results)
  })
}

export const printTemplate = async () => {
  document.querySelector("main").innerHTML = template()
  listeners()
  //Si puedes obtener información en el objeto images del localStorage me los pintas
  if (localStorage.getItem("images")) {
    const images = localStorage.getItem("images")
    printItems(JSON.parse(images))
    //Y si no me buscas imagenes de la luna
  } else {
    const images = await searchPhotos("moon")
    printItems(images.response.results)
  }
}
