const promesa = new Promise((resolve, reject) => {
    const interruptor = false;
    setTimeout(() => {
        if (interruptor) {
            resolve("Esto es un mensaje de que todo ha ido bien");
        } else {
            reject("Esto es un mensaje de que algo ha salido mal");
        }
    }, 5000);
});

console.log(promesa);

// .then .catch // 5 segundos
promesa
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Hemos acabado"));

console.log(promesa);