"use strict";
class Vehiculo {
    constructor(numPuertas, velocidad, marca) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.numPuertas = numPuertas;
    }
    getNumeroPuertas() {
        return this.numPuertas;
    }
    setNumeroPuertas(numPuertas) {
        this.numPuertas = numPuertas;
    }
}
const ferrari = new Vehiculo(2, 300, "Ferrari");
ferrari.setNumeroPuertas(2);
class Auto extends Vehiculo {
    constructor(numPuertas, velocidad, marca, cantidadDeRuedas) {
        super(numPuertas, velocidad, marca);
        this.cantidadDeRuedas = cantidadDeRuedas;
    }
    getCantidadRuedas() {
        return this.cantidadDeRuedas;
    }
    setCantidadRuedas(cantidadDeRuedas) {
        this.cantidadDeRuedas = cantidadDeRuedas;
    }
}
const bmw = new Auto(2, 300, "Toyota", 4);
