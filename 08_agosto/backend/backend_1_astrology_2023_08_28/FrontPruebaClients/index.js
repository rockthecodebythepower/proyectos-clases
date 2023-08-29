const nombre = document.querySelector("#nombre");
const primerApellido = document.querySelector("#primerApellido");
const segundoApellido = document.querySelector("#segundoApellido");
const fechaNac = document.querySelector("#fechaNac");
const hora = document.querySelector("#hora");
const signo = document.querySelector("#signo");
const enviar = document.querySelector("#enviar");

const createClient = async () => {
  const myClient = {
    nombre: nombre.value,
    primerApellido: primerApellido.value,
    segundoApellido: segundoApellido.value,
    fechaNac: fechaNac.value,
    hora: hora.value,
    signo: signo.value,
  };

  const myClientJson = JSON.stringify(myClient);

  await fetch("https://astrology-back.vercel.app/api/v1/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: myClientJson,
  });

  getClients();
};

enviar.addEventListener("click", createClient);

const getClients = async () => {

    const clients = await fetch("https://astrology-back.vercel.app/api/v1/clients");

    const clientsParsed = await clients.json();

    pintarClientes(clientsParsed);

}

const pintarClientes = (clientes) => {

    const clientes$$ = document.querySelector("#clients");

    clientes$$.innerHTML = "";

    for (const cliente of clientes) {
        clientes$$.innerHTML += `
            <h2>Nombre: ${cliente.nombre}</h2>
        `
    }

}

getClients();