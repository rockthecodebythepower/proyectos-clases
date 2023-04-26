import "./Footer.css"

const template = () => {
  return `
    <p>Copyright© Adult Swim - Rock the Code 2023</p>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
