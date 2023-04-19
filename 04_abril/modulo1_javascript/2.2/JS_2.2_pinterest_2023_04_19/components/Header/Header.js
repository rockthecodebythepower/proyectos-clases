import "./Header.css"

const template = () => {
  return `
  <h1>I</h1>
  <input type="text" placeholder="Search" id="searchinput"/>
  <button id="searchbtn"><img src="/icons/search.svg" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="/icons/dark.svg" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="/images/profile.jpg"
    alt="Profile image"
    class="profileimg"
  /> 
    `
}

const themeSwitch = () => {
  document.body.classList.toggle("dark")
}

const listeners = () => {
  const darkmodebtn = document.querySelector("#darkmodebtn")
  darkmodebtn.addEventListener("click", () => {
    themeSwitch()
    const theme = document.body.classList.contains("dark")
    if (theme) {
      document.querySelector("#darkmodeicon").src = "/icons/light.svg"
      localStorage.setItem("theme", "dark")
    } else {
      document.querySelector("#darkmodeicon").src = "/icons/dark.svg"
      localStorage.setItem("theme", "light")
    }
  })
  //Si tenemos un tema guardado en el localStorage que lo ponga
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
  }
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
  listeners()
}
