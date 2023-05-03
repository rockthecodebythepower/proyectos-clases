import "./Home.css"

const template = () => {
  return `
    <section class="home">
    <h2>Toda la información de <strong>Rick & Morty</strong> en una misma aplicación</h2>
    <img src="/rick.png" alt="Rick Sanchez" class="rick"/>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
