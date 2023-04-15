import "./encrypt.css"

const template = () => {
  return `
    <h2>Secret messages</h2>
    <div>
        <textarea id="text" placeholder="Write your message..."></textarea>
        <button id="encryptBtn">Encrypt</button>
        <button id="decryptBtn">Decrypt</button>
    </div>
    `
}

const encrypt = () => {
  const text = document.querySelector("#text").value
  const secretText = btoa(text)
  document.querySelector("#text").value = secretText
}

const decrypt = () => {
  const secretText = document.querySelector("#text").value
  const text = atob(secretText)
  document.querySelector("#text").value = text
}

const listeners = () => {
  document.querySelector("#encryptBtn").addEventListener("click", () => {
    encrypt()
  })
  document.querySelector("#decryptBtn").addEventListener("click", () => {
    decrypt()
  })
}

export const printTemplate = () => {
  document.querySelector("#encrypt").innerHTML = template()
  listeners()
}
