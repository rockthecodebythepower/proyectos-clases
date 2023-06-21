import { pintarChat } from "../Chat/Chat";
import "./Chats.css";

export const pintarChats = (chats) => {

    const divChats$$ = document.querySelector("aside#chats");

    //! imagen de perfil de la persona con la que tengo ese chat
    //! el nombre de la persona con la que tengo ese chat
    //! el último mensaje que se ha enviado en la conversación
    //* la hora del último mensaje que se ha enviado en la conversación
    //? ticks si es tu mensaje de que le han llegado a la persona

    for (const chat of chats) {
        
        //pintar cada chat
        pintarChat(chat, divChats$$);

    }

}