import "./Footer.css"

const template = () => {
  return `
    <h4>Copyright 2023 - Inspirest - Rock the Code</h4>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
