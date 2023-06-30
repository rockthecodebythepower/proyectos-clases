import "./Comments.css"

export const Comments = (comments) => {

    const modal$$ = document.createElement("div");

    modal$$.className = "modal";

    modal$$.innerHTML = `
        <p class="close">cerrar</p>
        <div class="comments">
            ${printComment(comments)}
        </div>
    `

    document.body.appendChild(modal$$);

    const close$$ = document.querySelector(".close");

    close$$.addEventListener("click", cerrar);

}

const printComment = (comments) => {

    let commentsString = ``;

    for (const comment of comments) {
        commentsString += `
            <div>
                <p>${comment.message}</p>
                <p>${comment.user}</p>
            </div>
        `
    }

    return commentsString;

}

const cerrar = (e) => {

    e.target.parentElement.remove();

}