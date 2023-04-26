import "./Gallery.css"

const template = () => {
  return `
    <nav>
    <ul>
      <li>
        <a href="#">Art Projects</a>
      </li>
      <li>
        <a href="#">Photographes</a>
      </li>
      <li>
        <a href="#">Nature</a>
      </li>
      <li>
        <a href="#">Models</a>
      </li>
    </ul>
  </nav>
  <section class="gallery">
    <img
      src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
      alt="Unsplash"
    />
    <img
      src="https://images.unsplash.com/photo-1681585845829-f9da44566a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="Unsplash"
    />
    <img
      src="https://images.unsplash.com/photo-1639664701039-f747268e2243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      alt="Unsplash"
    />
    <img
      src="https://images.unsplash.com/photo-1639160570491-1ff244259070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt="Unsplash"
    />
    <img
      src="https://images.unsplash.com/photo-1616980753032-a6c1b4cd0a72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt="Unsplash"
    />
    <img
      src="https://images.unsplash.com/photo-1623952690644-6b9971db7ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
      alt="Unsplash"
    />
  </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
