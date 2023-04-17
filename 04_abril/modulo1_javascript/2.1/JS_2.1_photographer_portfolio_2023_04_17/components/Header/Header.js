import "./Header.css"

const template = () => {
  return `
    <nav>
    <h1>P</h1>
    <ul>
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
  </nav>
  <img src="/images/header.jpg" alt="Cordillera nocturna" />
    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
