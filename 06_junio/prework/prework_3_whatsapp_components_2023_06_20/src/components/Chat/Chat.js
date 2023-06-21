import { pintarMain } from "../Main/Main";
import "./Chat.css";

export const pintarChat = (chat, elemento$$) => {

    // queremos un div por cada chat
    const chat$$ = document.createElement("div");
    // queremos un div para tener la imagen dentro y que no se vea distorsionada
    const divImg$$ = document.createElement("div");
    // queremos una img donde estará la imagen de la persona
    const img$$ = document.createElement("img");
    // queremos un h3 con el nombre de la persona con la que estás hablando
    const nombre$$ = document.createElement("h3")
    // queremos un div que contenga los dos p de abajo
    const info$$ = document.createElement("div");
    // queremos un p con el ÚLTIMO mensaje de la conversación
    const lastMessage$$ = document.createElement("p");
    // queremos un p con la fecha del último mensaje de la conversación
    const timeMessage$$ = document.createElement("p");

   /*  console.log(chat.imagenPerfil); // cogiendo de los datos del chat la imagen de la persona
    console.log(chat.persona); // cogiendo de los datos del chat el nombre de la persona
    console.log(chat.mensajes.at(-1).texto); // cogiendo de los datos del último mensaje del chat
    console.log(chat.mensajes.at(-1).hora); // cogiendo de los datos la hora del último mensaje del chat
    */

    img$$.src = chat.imagenPerfil;

    nombre$$.textContent = chat.persona;

    lastMessage$$.textContent = chat.mensajes.at(-1).texto;

    timeMessage$$.textContent = chat.mensajes.at(-1).hora;

    divImg$$.className = "div_img";
    chat$$.className = "chat";
    info$$.className = "info";

    // meter el div del chat dentro del aside de chats
    elemento$$.appendChild(chat$$);

    // meter la imagen dentro del div de la imagen
    divImg$$.appendChild(img$$);

    // meter dentro de info$$ los dos párrafos
    info$$.appendChild(lastMessage$$);
    info$$.appendChild(timeMessage$$);

    // meter dentro del chat tanto el div de la imagen, como el nombre de la persona y el div de la información
    chat$$.appendChild(divImg$$);
    chat$$.appendChild(nombre$$);
    chat$$.appendChild(info$$);


    //! cuando hagas click en un chat te lo pinta en el main para que veas la conversación.
    chat$$.addEventListener("click", () => pintarMain(chat))

}