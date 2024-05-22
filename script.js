"use strict";
let nombre = "Miguel";
let auto = {
    modelo: 2002,
    color: "negro"
};
let texto = "hola";
let anyValue = "hola";
const persona = { name: "miguel", age: 30 };
let cadenadetext = "hola";
function saludar(name) {
    console.log(`hola ${name}`);
}
saludar("pepe");
function saludardos(persona) {
    const { name, edad } = persona;
    console.log(`hola ${name} tengo ${edad}`);
}
saludardos({ name: "adri", edad: 14 });
function saludartres({ name, edad }) {
    console.log(name, edad);
    return name;
}
const sayHiFromFunction = (fn) => {
    return fn("miguel");
};
sayHiFromFunction((name) => {
    console.log(` hola soy ${name}`);
});
const sumar = (a, b) => {
    return a + b;
};
const addresHero = {
    city: "Madrid",
    planet: "Argentina"
};
const direccion = {
    calle: 25,
    altura: 124
};
const DireccionCasa = {
    calle: 106,
    altura: 374
};
function crearAddress() {
    return {
        planet: "Tierra",
        city: "Barcelona"
    };
}
const lenguajes = [];
