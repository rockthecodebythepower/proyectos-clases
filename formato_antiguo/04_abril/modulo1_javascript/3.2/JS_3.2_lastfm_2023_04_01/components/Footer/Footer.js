import "./Footer.css"

const template = () => {
  return `
    <p>CBS Interactive © 2023 Last.fm Ltd. </p>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
