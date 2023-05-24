//Hoisting eleva la functiones FUNCTION y las recoloca para que siempre sean accesibles en cualquier punto de nuestro código.

//Las constantes no flotan, pero nos obliga a tener cierto orden y limpieza en nuestro código declarando primero las funciones y después ejecutándolas

sayHello();

function sayHello() {
	console.log("Hola");
}

const sayBye = () => {
	console.log("Bye");
};

sayBye();
