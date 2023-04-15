import "./random.css"

const template = () => {
  return `
    <h2>Random color</h2>
    <div id="color"></div>
    <h3 id="colorcode">#F5F5F5</h3>
    <button id="colorBtn">Generate</button>
    `
}

const generateColor = () => {
  let color = "#"
  const digits = "ABCDEF0123456789"
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16)
    color += digits[randomNum]
  }
  return color
}

const listeners = () => {
  document.querySelector("#colorBtn").addEventListener("click", () => {
    const color = generateColor()
    document.querySelector("#color").style.backgroundColor = color
    document.querySelector("#colorcode").innerHTML = color
  })
}

export const printTemplate = () => {
  document.querySelector("#random").innerHTML = template()
  listeners()
}
