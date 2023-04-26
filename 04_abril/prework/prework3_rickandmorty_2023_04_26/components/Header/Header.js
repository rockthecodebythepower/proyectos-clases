import "./Header.css"

const template = () => {
  return `
    <img src="/logo.png" alt="Rick and Morty logo"/>
    <nav>
        <ul>
            <li>
                <a href="#null" id="homelink"">Home</a>
            </li>
            <li>
                <a href="#null" id="characterslink">Characters</a>
            </li>
            <li>
                <a href="#null" id="aboutlink">About</a>
            </li>
        </ul>
    </nav>
    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
