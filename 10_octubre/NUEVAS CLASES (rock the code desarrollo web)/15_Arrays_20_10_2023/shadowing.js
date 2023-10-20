//* a la hora de crear variables o utilizarlas cómo estas se comportan con sus scopes

//? let const -> tienen ámbito local

let variable = "estoy en un ámbito global porque no estoy dentro de ningún bloque";


if (5 > 4) {
    // dos variables que se llaman igual y una está haciendo "sombra" a la otra
    let variable = "estoy en un ámbito local y me llamo igual que la de arriba";

    console.log(variable);
}