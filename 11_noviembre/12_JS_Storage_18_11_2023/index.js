let theme = localStorage.getItem("theme");
let cookies = document.cookie;

console.log(cookies);

// las cookies siempre usarán el = para separar la clave del valor;

// el método split lo que hace es dividir un string en un nuevo array
const arrayCookies2 = cookies.split("; ");

console.log(arrayCookies2);

let newArrayCookies = [];

for (const element of arrayCookies2) {
    newArrayCookies = [...newArrayCookies, ...element.split("=")];
}

const objeto = {

}

console.log(newArrayCookies);

for (let i = 0; i < newArrayCookies.length; i = i + 2) {
    objeto[newArrayCookies[i]] = newArrayCookies[i + 1];
}

console.log(objeto);

document.cookie = `alumno=Jonathan; expires=Thu, Dec 2023 12:00:30 UTC; path=/`;

document.cookie = `vestido=200€; expires=Thu, Dec 2023 12:00:30 UTC; path=/`;

document.body.className = theme;

const button = document.createElement("button");
button.textContent = "🌚";
button.addEventListener("click", () => {
    if (theme === "light") {
        theme = "dark";
        button.textContent = "🌞";
        document.body.className = theme;
        localStorage.setItem("theme", theme);
        document.cookie = `theme=${theme}; expires=Thu, Dec 2023 12:00:00 UTC; path=/`;
    } else {
        theme = "light";
        button.textContent = "🌚";
        document.body.className = theme;
        localStorage.setItem("theme", theme);
        document.cookie = `theme=${theme}; expires=Thu, Dec 2023 12:00:00 UTC; path=/`;
    }
    console.log(theme);
});

document.body.append(button);