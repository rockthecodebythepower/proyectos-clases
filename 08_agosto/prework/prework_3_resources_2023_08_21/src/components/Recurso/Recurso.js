import "./Recurso.css";

export const Recurso = (recurso) => {

    return `
        <div class="recurso">
            <h3>${recurso.nombre}</h3>    
            <a href="${recurso.enlace}" target="_blank">
                <img src="${recurso.img}"/>
            </a>
            <p>${recurso.description}</p>
        </div>
    `

}