import "./Home.css"

const template = () => {
  return `
  
    <section class="home">
    <h2>
    <span class="material-symbols-outlined">
    location_on
    </span>Tokyo Ikebukuro, Japan
    </h2>
    <img src="https://images.unsplash.com/photo-1681520350002-a63a83af2995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Tokyo"/>
    
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
