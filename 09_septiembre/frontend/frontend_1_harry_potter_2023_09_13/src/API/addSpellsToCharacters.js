import { getJson } from "./getJson";

export const addSpellsToCharacters = async (setState) => {

    const characters = await getJson("personajes");

    const spells = await getJson("hechizos");

    // utilizo el método de arrays map porque necesito un array de personajes pero con un valor añadido
    const charactersSpells = characters.map((character) => {
        character.hechizos = [];
        // durante 3 veces hacemos lo que haya dentro
        for (let i = 0; i < 3; i++) {
            const randomPosition = Math.floor(Math.random() * spells.length); // numero entre 0 y 72
            // array con elementos eliminados
            character.hechizos.push(spells.splice(randomPosition, 1)[0]);
        }
        return character;
    })
    
    setState(charactersSpells);
}