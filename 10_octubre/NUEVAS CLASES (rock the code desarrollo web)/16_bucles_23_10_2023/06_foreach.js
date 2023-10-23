//! yo no puedo utilizar el bucle foreach para hacer vueltas específicas sin tener un array o string de apoyo

const emojis = ["🎅", "🤶", "👼", "🕵️‍♂️", "👷‍♀️", "👩‍🌾"]; // 6
// posiciones     0     1      2     3     4      5

for (let i = emojis.length / 2; i < emojis.length; i++) {
    let emoji = emojis[i];
    
    console.log(emoji);
}


console.log("--------------------------");

//! recorrer arrays - es un for que es un método de array
emojis.forEach((emoji) => {
    console.log(emoji);
});