//! CRUD -> SIGLAS -> CREATE READ UPDATE DELETE
//! DOM -> DOCUMENT OBJECT MODEL

//! READ
// getElementsByClassName  -   getElementsByTagName  -   getElementById // no hace falta para estos sintaxis de css

//? querySelector y querySelectorAll (sintaxis de css);

const myH1 = document.querySelector("h1");

//! UPDATE
console.log(myH1.innerHTML);
console.log(myH1.innerText);
console.log(myH1.textContent);
console.log(myH1.clientWidth);

myH1.textContent = "He cambiado ya no soy el mismo";
/* myH1.style.position = "absolute";
myH1.style.top = "200px"; */
/* myH1.className = "";
myH1.classList.add();
myH1.classList.remove();
myH1.classList.toggle(); */

// sustituir / sobreescribir -> una clase
/* myH1.className = "cambiado";
myH1.classList.add("añadido");
myH1.classList.remove("cambiado");
myH1.classList.toggle("cambiado"); */

const arrayImgs = [
  "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
  "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
  "https://dealgoritmos.com/wp-content/uploads/2023/05/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://i.pinimg.com/originals/ae/ca/bb/aecabbb80f83af71ad05737e2ae2a483.jpg",
];

const img = document.querySelector("img");
img.src = arrayImgs[Math.floor(Math.random() * arrayImgs.length)];


//! DELETE
// remove() -> es un método que elimina un único de html desde js
myH1.remove();


//! CREATE
// para crear un nodo en html desde js utilizaremos el método createElement();
//          document.createElement("nombreEtiqueta")
const myP = document.createElement("p");
// el elemento se ha creado pero está en el limbo;

// inyectar - appendChild()
//! elementoPadre.appendChild(elementoHijo);

myP.textContent = "He añadido contenido de texto a mi párrafo creado mediante js";

/* document.body.appendChild(myP); */


// meter el párrafo dentro del div
// necesito el div
// READ
const myDiv = document.querySelector(".insert-here");

/* myDiv.append(myP); */

// elementoPadre.insertBefore(elementoHijo, elementoAdyacente);
document.body.insertBefore(myP, img);








//! Mini ejercicios
const alumns = [
    {
        name: "Nadia",
        score: 0
    },
    {
        name: "Rocío",
        score: 0
    },
    {
        name: "Ignacio",
        score: 3
    },
    {
        name: "Jeggan",
        score: 6
    },
    {
        name: "Johan",
        score: 3
    },
    {
        name: "Eva",
        score: 0
    },
    {
        name: "Alba",
        score: 6
    },
    {
        name: "Martin",
        score: 0
    },
    {
        name: "Kevin",
        score: 6
    },
]

{/* 
<ul>
    <li>
        <p></p>
    </li>
    <li>
        <p></p>
    </li>
    <li>
        <p></p>
    </li>
</ul> 
*/}

const alumnsList = document.createElement("ul");

// añadir una clase mediaNegativa o mediaPositiva a nuestro ul, dependiendo de si la media de notas de los alumnos es mayor o igual a 5 (mediaPositiva) o menor o igual (mediaNegativa);

let sum = 0;

for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    
    sum += alumn.score;
}

// sum / alumns.length

if ((sum / alumns.length) >= 5) {
    alumnsList.className = "mediaPositiva";
} else {
    alumnsList.className = "mediaNegativa";
}

for (const alumn of alumns) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    
    /* if (alumn.score >= 5) {
        p.className = "aprobado"
    } else {
        p.className = "suspenso"
    } */

    //! casos en los que no lo utilizaría: cuando tengamos una respuesta muy larga a una condición - si tengo muchas comprobaciones
    // condición     ? respuesta si se cumple   : respuesta si no se cumple
    alumn.score >= 5 ? p.className = "aprobado" : p.className = "suspenso";

    p.textContent = `${alumn.name} tiene un score de: ${alumn.score}`;

    li.addEventListener("click", () => alert(`has hecho click en el alumn: ${alumn.name}`));
    
    li.append(p);
    alumnsList.append(li);
}

for (const alumn of alumns) {
    alumnsList.innerHTML += `
        <li>
            <p class="${alumn.score >= 5 ? 'aprobado' : 'suspenso'}">
                ${alumn.name} tiene una puntuación de: ${alumn.score}
            </p>
        </li>
    `
}

document.body.append(alumnsList);