import "./Header.css"

const template = () => {
  return `
  <h1>I</h1>
  <nav>
    <ul>
      <li>
        <a href="#null" class="active">Inicio</a>
      </li>
      <li>
        <a href="#null">Hoy</a>
      </li>
      <li>
        <a href="#null">Crear</a>
      </li>
    </ul>
  </nav>
  <input type="text" placeholder="🔎 Search" />
  <img
    src="/icons/notification.svg"
    alt="Notification icon"
    class="icon"
  />
  <img src="/icons/messages.svg" alt="Messages icon" class="icon" />
  <img
    src="/images/profile.jpg"
    alt="Profile image"
    class="profileimg"
  /> 
    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
