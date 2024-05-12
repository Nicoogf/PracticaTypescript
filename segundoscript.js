"use strict";
console.log("Nuevo archivo compilado");
const str1 = "Nicolas";
const telefono = 2324;
const activo = false;
const noDefinido = undefined;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Lunes"] = "Lunes";
    DiasSemana["Martes"] = "Martes";
    DiasSemana["Miercoles"] = "Miercoles";
    DiasSemana["Jueves"] = "Jueves";
    DiasSemana["Viernes"] = "Viernes";
    DiasSemana["Sabado"] = "Sabado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
function sumar(a, b, nombre = "Default") {
    return `Buenos dias ${nombre} ${a} + ${b} `;
}
console.log(sumar(4, 4));
