import "./Footer.css"

const template = () => {
  return `

    <h4>Copyright © Unsplash & Rock the Code - 2023</h4>

    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
