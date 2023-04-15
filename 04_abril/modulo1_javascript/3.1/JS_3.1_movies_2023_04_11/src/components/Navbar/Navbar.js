import './style.css'

const Template = () => `
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/movies">Movies</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
`

export const TemplatePrint = () => {
  document.querySelector("header").innerHTML += Template()
}