const array1 = ["😀", "😁", "😂", "🤣", "😃"];

const array2 = ["🤩", "🙄", "😚"];

const array3 = [...array1, "😎", ...array2, "😐", "🤔"];

// "😀", "😁", "😂", "🤣", "😃", "😎", "🤩", "🙄", "😚", "😐", "🤔"

/* console.log(array3); */


const objeto = {
    prop1: "paquito"
}

const objeto2 = {
    prop1: "menganito"
}

const objeto3 = { ...objeto, prop4: "Palomitas", ...objeto2 }

console.log(objeto3);