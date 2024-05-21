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
const enableAnimation = 200;
let hero = {
    name: "Carlos",
    age: 24
};
function createHero(hero) {
    const { name, age } = hero;
    return { id: crypto.randomUUID(), name, age, isActive: true };
}
const roman = createHero({ name: "roman", age: 48 });
roman.powerScale = "local";
