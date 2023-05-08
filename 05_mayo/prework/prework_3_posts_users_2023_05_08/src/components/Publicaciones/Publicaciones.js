import { USER } from "../../../main";
import { users } from "../../data/users";
import "./Publicaciones.css"

export const solicitarPublicaciones = async () => {

    const resultado = await fetch("https://jsonplaceholder.typicode.com/posts");
    const publicaciones = await resultado.json();

    pintarPublicaciones(publicaciones)

}


const pintarPublicaciones = (publicaciones) => {

    console.log(publicaciones);

    const posts$$ = document.querySelector("#posts");

    posts$$.innerHTML = "";

    for (const publicacion of publicaciones) {
        
        /* posts$$.innerHTML += `
            <div class="publicacion">
                ${publicacion.userId === USER.userId ? '<img src="/assets/remove.png" class="papelera"/>' : ""}
                <h2>${publicacion.title}</h2>
                <h4>${users.find(user => user.userId === publicacion.userId).userName}</h4>
                <p>${publicacion.body}</p>
            </div>
        ` */

        const publicacion$$ = document.createElement("div");
        const imagen$$ = document.createElement("img");
        const titulo$$ = document.createElement("h2");
        const h4$$ = document.createElement("h4");
        const p$$ = document.createElement("p");

        publicacion$$.className = "publicacion";
        imagen$$.className = "papelera";

        imagen$$.src = "/assets/remove.png";
        titulo$$.textContent = publicacion.title;
        h4$$.textContent = users.find(user => user.userId === publicacion.userId).userName;
        p$$.textContent = publicacion.body;

        posts$$.appendChild(publicacion$$);
        publicacion.userId === USER.userId && publicacion$$.appendChild(imagen$$);
        publicacion$$.appendChild(titulo$$);
        publicacion$$.appendChild(h4$$);
        publicacion$$.appendChild(p$$);

        imagen$$.addEventListener("click", () => eliminar(publicacion, publicaciones));
    }

}

const eliminar = (publicacion, publicaciones) => {

    publicaciones.splice(publicaciones.indexOf(publicacion), 1);

    pintarPublicaciones(publicaciones);

}