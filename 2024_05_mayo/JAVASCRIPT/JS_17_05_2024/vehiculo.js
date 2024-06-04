class Vehiculo {

    constructor (ruedas, nombre) {
        this.distancia = 0;
        this.ruedas = ruedas;
        this.nombre = nombre;
    }

    mover () {
        this.distancia += 10 * this.ruedas;
        console.log(`El ${this.nombre} se ha movido hasta ` + this.distancia);
    }

}

const coche = new Vehiculo(4, "coche");
const moto = new Vehiculo(2, "moto");

coche.mover();
coche.mover();
moto.mover();