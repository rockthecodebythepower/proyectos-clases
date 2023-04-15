import './style.css'

const Template = () => `
  <div class="logo-container">
    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
  </div>
`

export const TemplatePrint = () => {
  document.querySelector("header").innerHTML += Template()
}