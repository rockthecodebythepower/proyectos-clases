function saludo (funcion) {

    console.log("Hola", funcion());

}

function getRandomName () {

    const nombres = ["Alejandro", "Eva", "Alicia", "Eric", "Nadia", "Jorge", "Silvia"];

    return nombres[Math.floor(Math.random() * nombres.length)];

}

saludo(getRandomName);