import "./Header.css"

const template = () => {
  return `
    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="Google Logo" />
    <h2>Images</h2>
    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
