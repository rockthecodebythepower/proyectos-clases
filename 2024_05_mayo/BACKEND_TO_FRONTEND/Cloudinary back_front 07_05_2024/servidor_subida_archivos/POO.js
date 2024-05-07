class vehiculo {

    constructor (ruedas, puertas, nombre) {
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.distancia = 0;
        this.arrancado = false;
        this.nombre = nombre;
    }

    mover () {
        this.distancia += this.ruedas * 10;
        console.log(this.nombre, "se ha movido hasta", this.distancia);
    }

    arrancar () {
        this.arrancado = true;
    }

    apagar () {
        this.arrancado = false;
    }

}


const coche = new vehiculo(4, 3, "coche");
const moto = new vehiculo(2, 0, "moto");


coche.mover();
coche.mover();

moto.mover();
moto.mover();