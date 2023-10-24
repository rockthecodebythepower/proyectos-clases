//! Cómo acceder a las propiedades de un objeto

const coche = {
    ruedas: 4,
    puertas: 5,
    color: "rojo",
    marca: "Mazda",
    precio: 23000,
    modelo: "mx5",
    km: 30000,
    objeto: {
        objeto2: {
            array: [
                {}, // 0
                [
                 {
                    laPropQueQuiero: "me encontraste!"
                 }   // 0 
                ]// 1
            ]
        }
    }
}


//! Manera 1
//* con el .
/* console.log(coche.ruedas);

if (coche.km <= 30000) {
    console.log("me lo compro");
} else {
    console.log("NO me lo compro");
} */

/* console.log(coche.objeto.objeto2.array[1][0].laPropQueQuiero); */








//! Manera 2
//* con el []

const variable = "ruedas";

// lo que intenta hacer el . es buscar la propiedad llamada "variable" dentro del objeto
console.log(coche.variable);

// lo que intenta hacer el [] es buscar la propiedad mediante el VALOR de nuestra variable llamada variable
console.log(coche[variable]);
//                 string


const colores = {
    black: "white",
    white: "black",
    red: "white",
    blue: "white",
    yellow: "black",
    orange: "black",
    pink: "black",
};

const userEligeUnBgColor = "blue";

console.log(colores[userEligeUnBgColor]);

/* if (userEligeUnBgColor === "black") {
    console.log("white");
} else if (userEligeUnBgColor === "white") {
    console.log("black");
} else if (userEligeUnBgColor === "red") {
    console.log("white");
} else if (userEligeUnBgColor === "blue") {
    console.log("white");
} else if (userEligeUnBgColor === "yellow") {
    console.log("black");
} else if (userEligeUnBgColor === "orange") {
    console.log("black");
} else if (userEligeUnBgColor === "pink") {
    console.log("black");
} */







const pokemon = {
  base_experience: 64,
  height: 7,
  name: "bulbasaur",
  sprites: {
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      },
    },
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
    },
  ],
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    }
  ],
  weight: 69,
};

//! me piden el nombre del pokemon y sus tipos
let stringTipos = ``;

for (const tipo of pokemon.types) {
    stringTipos += `${tipo.type.name} `
}

console.log(`${pokemon.name} tipo:  ${stringTipos}`);

console.log("Bulbasaur tipo: grass poison");


//! me piden el nombre del pokemon y sus estadísticas
