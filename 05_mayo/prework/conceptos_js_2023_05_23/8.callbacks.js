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

/* const enviarAlCarro = (articulo) => {
	carro.push(articulo);
};

const enviarADeseo = (articulo) => {
	listaDeseados.push(articulo);
};

const gestionarArticuloDeAmazon = (articulo, callback) => {
	const almacenarEnMemoria = articulo;
	callback(articulo);
};

gestionarArticuloDeAmazon("Microondas", enviarADeseo); */

//Caso practico

const crearAlumnoAprobado = (alumno) => {
	const ficha = {
		name: alumno,
		aprobado: true,
	};
	console.log(ficha);
};

const crearAlumnoSuspenso = (alumno) => {
	const ficha = {
		name: alumno,
		aprobado: false,
	};
	console.log(ficha);
};

const crearFicha = (alumno, callback) => {
	callback(alumno);
};

crearFicha("Jose", crearAlumnoAprobado);
crearFicha("Manuel", crearAlumnoSuspenso);
