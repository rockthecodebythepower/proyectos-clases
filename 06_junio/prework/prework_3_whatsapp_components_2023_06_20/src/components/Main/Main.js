import "./Main.css";

export const pintarMain = (chat) => {

    console.log(chat);

    const main$$ = document.querySelector("#main");

    main$$.innerHTML = `
        <div id="info_contacto">
            <div>
                <img src="${chat.imagenPerfil}"/>
            </div>
            <h1>${chat.persona}</h1>
        </div>
        <div id="contenido">
            ${printMensajes(chat.mensajes)}
        </div>
        <div id="enviar_mensaje">
            <input />
            <button id="enviar">Enviar</button>
        </div>
    `

    const contenido$$ = document.querySelector("#contenido")
    contenido$$.scrollTop = contenido$$.scrollHeight;

    const enviar$$ = document.querySelector("#enviar");

    enviar$$.addEventListener("click", () => addMessage(chat, document.querySelector("input").value));

}

const addMessage = (chat, newMessage) => {

    chat.mensajes.push(
        {
            texto: newMessage,
            hora: "10:01 PM",
            remitente: "tú"
        }
    );

    pintarMain(chat);

}

const printMensajes = (mensajes) => {

    let respuesta = ``;

    for (const mensaje of mensajes) {
        respuesta += `
            <div class="${mensaje.remitente === "tú" ? "mio" : "tuyo"}">
                <p>${mensaje.texto}</p>
                <p>${mensaje.hora}</p>
            </div>
        `
    }

    return respuesta

}