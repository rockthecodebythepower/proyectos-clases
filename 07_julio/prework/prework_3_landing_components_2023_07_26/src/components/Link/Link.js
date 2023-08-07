import "./Link.css"

export const Link = (texto, id = "", enlace = "#") => {

    return `<li>
                <a href="${enlace}" class="link" id="${id}">${texto}</a>
            </li>`

}