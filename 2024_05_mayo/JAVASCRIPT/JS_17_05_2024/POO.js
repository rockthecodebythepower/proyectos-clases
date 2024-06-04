// POO -> se utilizan clases, se generan instancias u objetos a partir de esa clase
// programación funcional -> se utilizan funciones

 // objeto o instancia a partir de la clase Date

setInterval(() => {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);