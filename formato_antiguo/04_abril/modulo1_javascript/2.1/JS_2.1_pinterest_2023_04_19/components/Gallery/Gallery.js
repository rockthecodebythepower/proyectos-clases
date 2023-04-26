import "./Gallery.css"
import {template as Card} from "../Card/Card"
import {data} from "../../data/data"

const template = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery")
  for (const item of items) {
    gallery.innerHTML += Card(item)
  }
}

const listeners = () => {
  printItems(data)
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
