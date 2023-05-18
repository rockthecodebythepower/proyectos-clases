const buenosDiasMiembroAddams = (name) => {
	console.log("Buenos días " + name);
};

const buenasNochesMiembroAddams = (name) => {
	console.log("Buenas noches " + name);
};

const crearMiembroAddams = (name, callback) => {
	const miembro = name + " Addams";
	callback(miembro);
};

crearMiembroAddams("Fetido", buenosDiasMiembroAddams);
crearMiembroAddams("Miercoles", buenasNochesMiembroAddams);

//

const enviarAlCarro = (articulo) => {
	carro.push(articulo);
};

const enviarADeseo = (articulo) => {
	listaDeseados.push(articulo);
};

const gestionarArticuloDeAmazon = (articulo, callback) => {
	const almacenarEnMemoria = articulo;
	callback(articulo);
};

gestionarArticuloDeAmazon("Microondas", enviarADeseo);
