import "./Header.css"

const template = () => {
  return `
    <img class="icon" src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png" alt="CD icon" />
    <img src="https://www.last.fm/static/images/logo_animate@2x.e93e5b7db3de.gif" alt="Lastfm logo"/>
    <img class="profile" src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/03/09/grogu-en-the-mandalorian.jpeg" alt="Profile photo"/>
    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
