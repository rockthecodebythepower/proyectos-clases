import "./spread.css"

const template = () => {
  return `
    <h2>Spread</h2>
    <select id="emojisSelect">
    <option value="👩‍👧‍👦">👩‍👧‍👦</option>
    <option value="👨🏼‍💻">👨🏼‍💻</option>
    <option value="👨‍👨‍👧‍👧">👨‍👨‍👧‍👧</option>
    </select>
    <h3 id="spreadRes"></h3>
    `
}

const listeners = () => {
  document.querySelector("#emojisSelect").addEventListener("change", (ev) => {
    const result = [...ev.target.value]
    document.querySelector("#spreadRes").innerHTML = `${result.join(" ")}`
  })
}

export const printTemplate = () => {
  document.querySelector("#spread").innerHTML = template()
  listeners()
}
