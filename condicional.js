"use strict";
let estudiaste = true;
if (estudiaste) {
    console.log("Esta aprobado");
}
else {
    console.log("esta desaprobado");
}
let interMiami = 11;
let dalas = 10;
let messi = 1;
let juegamessi = true;
let palabras = "Me emociona verlo a messi";
function jugar(equipo1, equipo2, juegamessi) {
    let motivo = "";
    if (juegamessi) {
        equipo1 += messi;
        motivo = "porque jugo messi";
    }
    if (juegamessi)
        equipo1 += messi;
    if (equipo1 > equipo2)
        console.log(`gana inter de miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log(`empatan`);
    if (equipo1 < equipo2)
        console.log(`gana dalas`);
}
jugar(interMiami, dalas, juegamessi);
let disney;
disney = "Boca";
console.log(disney);
disney = 1457;
console.log(disney);
disney = true;
console.log(disney);
