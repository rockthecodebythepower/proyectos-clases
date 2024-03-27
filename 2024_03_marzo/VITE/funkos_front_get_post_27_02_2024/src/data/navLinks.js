import { CreateCharacter } from "../pages/CreateCharacter/CreateCharacter";
import { GetCharacters } from "../pages/GetCharacters/GetCharacters";

export const navLinks = [
  {
    text: "Crear Personaje",
    funcion: CreateCharacter
  },
  {
    text: "Ver Personajes",
    funcion: GetCharacters
  },
];
