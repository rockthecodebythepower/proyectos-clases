const sayHello = () => {
  console.log("Hola!");
};

setTimeout(sayHello, 4000);

const data = [1, 2, 3, 4];

primeraFuncion(data, () => {
  segundaFuncion(data, () => {
    terceraFuncion(data, () => {
      cuartaFuncion(data);
    });
  });
});
