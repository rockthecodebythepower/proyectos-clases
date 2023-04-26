import "./Footer.css"

const template = () => {
  return `
    <p>2023 - Rock the Code</p>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
