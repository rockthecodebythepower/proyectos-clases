let frase = "10";

//? puedo sumar una cadena de texto a un número? NO, puedo concatenar un número a una cadena de texto? SI
frase = 0 + 10 + frase + 10;

//! suma de números operador + -> numero + numero = numeroResultante -> operación matemática
//! concatenación de texto operador + -> texto + texto = textoResultante -> concatenación del texto

console.log(frase);
console.log(typeof frase);

//! EN LOS STRING EL OPERADOR + SIRVE PARA CONCATENAR EL TEXTO

let frase2 = 'pepito'

//? concatenamos variables con texto plano

console.log(frase + " Azul " + frase2);

//* la , me sirve para concatenar texto en un console.log y me separa el texto concatenado con espacios
console.log(frase, `Azul`, frase2);

//! literal string, comillas francesas...
//! estas tienen una particularidad, que es que yo puedo poner una variable dentro del string donde yo quiera siempre y cuando utilice ${} para introducirla
console.log(`${frase} Azul ${frase2}`);

/* div.innerHTML = "<div><h3>" + frase + "</h3><h4>" + frase2 + "</h4>" + "<img src='" + imagen + "'/>";

div.innerHTML = `
    <div>
        <h3>${frase}</h3>
        <h4>${frase2}</h4>
        <img src="${imagen}"/>
    </div>
` */


//! LOS STRING SON UN TIPO DE DATO ITERABLE

//? LOS ÚNICOS TIPOS DE DATOS ITERABLES SON LOS STRINGS Y LOS (ARRAYS o LISTAS DE COSAS)

//* ser iterable significa que se puede recorrer o que podemos acceder a las posiciones de la cadena de texto, o que podemos realizar diferentes funcionalidades que nos permitar recorrerlo