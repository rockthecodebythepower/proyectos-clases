import "./Main.css"
import {getTopAlbums, getArtistInfo} from "../../utils/fetchData"
import {AlbumCard} from "../AlbumCard/AlbumCard"
import {Loader} from "../Loader/Loader"

const template = () => {
  return `
    <form>
      <input type="text" id="searchinput" placeholder="Artist name..."/>
      <button type="submit">Search</button>
    </form>
    <section id="artist-info">
        <h2>Artist info...</h2>
    </section>
    <ul id="artist-albums">
        <h2>Artist albums...</h2>
    </ul>
    `
}

const printAlbums = (albums) => {
  const container = document.querySelector("#artist-albums")
  container.innerHTML = ""
  for (const album of albums) {
    container.innerHTML += AlbumCard(album)
  }
}

const printArtist = (artist) => {
  const container = document.querySelector("#artist-info")
  container.innerHTML = ""
  container.innerHTML = `
  <h2>${artist.name}</h2>
  <p>${artist.bio.summary}</p>
  `
}

const listeners = async () => {
  const albums = await getTopAlbums("Madonna")
  const artist = await getArtistInfo("Madonna")
  printAlbums(albums)
  printArtist(artist)

  document.querySelector("form").addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const inputValue = document.querySelector("#searchinput").value
    const containerInfo = document.querySelector("#artist-info")
    containerInfo.innerHTML = Loader()
    const albums = await getTopAlbums(inputValue)
    const artist = await getArtistInfo(inputValue)
    printAlbums(albums)
    printArtist(artist)
  })
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
