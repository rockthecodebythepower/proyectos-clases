import "./Card.css";

// que necesitamos para crear elementos mediante createElement...
export const Card = ( nodoPadre, url, titulo, texto ) => {
    const cardHTML = document.createElement("div");

    cardHTML.className = "card";

    if (url) {
        const img = document.createElement("img");
        img.src = url;
        cardHTML.appendChild(img);
    }

    const title = document.createElement("h3");
    const p = document.createElement("p");

    title.textContent = titulo;
    p.textContent = texto

    cardHTML.appendChild(title);
    cardHTML.appendChild(p);

    nodoPadre.appendChild(cardHTML);
}