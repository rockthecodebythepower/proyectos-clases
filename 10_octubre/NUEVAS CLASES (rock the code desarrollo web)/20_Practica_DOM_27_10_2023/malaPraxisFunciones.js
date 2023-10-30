// seleccionando el contenedor donde quiero volcar mis emojis
const emojiDiv = document.querySelector(".insert-emoji-here");

// recorro el array de emojis para ir accediendo a ellos de uno en uno
for (const emoji of emojis) {

    // creamos el párrafo
    const pEmoji = document.createElement("p");

    // le damos al párrafo el valor del emoji
    pEmoji.textContent = emoji;

    // metemos el emoji dentro del contenedor
    emojiDiv.appendChild(pEmoji);
}


const numDiv = document.querySelector(".insert-num-here");

for (const number of numbers) {

    const pNumber = document.createElement("p");

    pNumber.textContent = number;

    numDiv.appendChild(pNumber);
}