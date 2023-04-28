export const doc = [
    {
        lenguaje: "javascript",
        contenido: `const personas = [
    {
        name: "Pepe",
        age: 34
    },
    {
        name: "Pepito",
        age: 14
    },
    {
        name: "Pepazo",
        age: 24
    },
    {
        name: "Pepote",
        age: 54
    },
    {
        name: "Pepin",
        age: 94
    } 
];

const personasMayoresDeEdad = personas.filter((persona) => persona.age >= 18);`,
        titulo: "Como hacer un filtro en javascript"
    },
    {
        lenguaje: "html",
        contenido: `<ul>
    <li>Esto</li>
    <li>está</li>
    <li>desordenado</li>
    <li>unorderedlist (ul)</li>
</ul>`,
        titulo: "Como hacer una lista desordenada en HTML"
    },
    {
        lenguaje: "css",
        contenido: `div {
    display: flex;
    justify-content: center;
    align-items: center
}`,
        titulo: "Como poner el centro de algo un elemento en CSS"
    },
    {
        lenguaje: "javascript",
        contenido: `const comidas = ["naranjas", "pomelo", manzana];

comidas.foreach((comida) => console.log(comida))`,
        titulo: "Como hacer un bucle foreach para recorrer un array"
    },
]

export const languageIcons = {
    javascript: "/assets/js.png",
    html: "/assets/html5.png",
    css: "/assets/css-3.png",
}