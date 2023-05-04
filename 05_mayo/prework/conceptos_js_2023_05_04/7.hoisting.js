sayHello();

function sayHello() {
	console.log("Hola");
}

//Las constantes no flotan por el hoising
const sayBye = () => {
	console.log("Adios");
};

sayBye();
