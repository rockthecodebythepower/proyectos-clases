import "./Gallery.css"
import {searchPhotos} from "../../utils/fetchData"

const template = () => {
  return `
    <nav id="photolinks">
    <ul>
      <li>
        <a href="#null">Art Projects</a>
      </li>
      <li>
        <a href="#null">Photographes</a>
      </li>
      <li>
        <a href="#null">Nature</a>
      </li>
      <li>
        <a href="#null">Models</a>
      </li>
      <li>
      <a href="#null">Space</a>
    </li>
    </ul>
  </nav>
  <section class="gallery">
  </section>
    `
}

const printPhotos = (photos) => {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = ""
  for (const photo of photos) {
    gallery.innerHTML += `<img src=${photo.urls.regular} alt=${photo.alt_description} style="border: 4px solid ${photo.color}"/>`
  }
}

const listeners = async () => {
  const links = document.querySelectorAll("#photolinks a")
  for (const link of links) {
    link.addEventListener("click", async (ev) => {
      const photos = await searchPhotos(ev.target.innerHTML)
      printPhotos(photos.response.results)
    })
  }

  const defaultphotos = await searchPhotos("Pets")
  printPhotos(defaultphotos.response.results)
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
