import "./Aprendizaje.css"

export const Aprendizaje = (aprendizaje) => {
    return `
        <div class="aprendizaje">
            <h3>${aprendizaje.nombre}</h3>    
            <a href="${aprendizaje.enlace}" target="_blank">
                <img src="${aprendizaje.img}"/>
            </a>
            <p>${aprendizaje.description}</p>
        </div>
    `
}