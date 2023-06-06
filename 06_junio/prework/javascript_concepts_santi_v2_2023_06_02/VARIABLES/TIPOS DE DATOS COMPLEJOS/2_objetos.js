const quokka = {
    nombreCientifico: "Setonix brachyurus",
    peso: 3,
    comportamiento: {
        feliz: {
            capacidadParaMatar: 0,
            capacidadParaSonreir: 100
        },
        enfadado: {
            capacidadParaMatar: 100,
            capacidadParaSonreir: 0
        }
    }
}

//! un console.log de la capacidad para matar que tiene el quokka cuando está feliz.

console.log(quokka.comportamiento.feliz.capacidadParaMatar);