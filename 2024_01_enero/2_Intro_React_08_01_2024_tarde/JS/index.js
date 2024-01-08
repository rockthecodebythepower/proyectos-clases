/* const listados = ["listado 1", "listado 2", "listado 3"];


document.body.innerHTML = `
    <div>
        <ul>
            <li>${listados[0] + " texto concatenado"}</li>
            <li>${listados[1]} esto es más texto</li>
            <li>${listados[2].length > 10 ? "es muy largo" : listados[2]}</li>
        </ul>
    </div>
`; */


const saludar = ({ nombre, apellido = "" }) => {
    console.log("Hola " + nombre + " " + apellido);
}

saludar({ nombre: "Jeniffer", apellido: "Balabuch" });
saludar({ apellido: "García", nombre: "Jonatan"});
saludar({ nombre: "Manu" });