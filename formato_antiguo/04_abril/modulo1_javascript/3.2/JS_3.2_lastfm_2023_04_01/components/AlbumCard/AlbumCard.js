import "./AlbumCard.css"

export const AlbumCard = (album) => {
  return `
    <li class="albumcard">
    <img src=${album.image[album.image.length - 2]["#text"]} alt=${album.name}/>
    <a href=${album.url} target="_blank">
      <h3>${album.name}</h3>
    </a>
    </li>
    `
}
