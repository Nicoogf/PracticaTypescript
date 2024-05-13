"use strict";
let arregloNumero = [1, 2, 3, 4, 5, 6];
let arregloTexto = ["hola", "dos", "tres"];
arregloTexto.indexOf("hola");
// type Programador = {
//     nombre : string ,
//     tecnologias : string [] ,
//     tomaMate?: boolean | null
// }
let dev = {
    nombre: "Nicolas",
    tecnologias: ["React", "css"],
    tomaMate: false
};
let dev2 = {
    nombre: "Federico",
    tecnologias: ["cobol"],
    tomaMate: null,
    apellido: "Gonzales"
};
function enviarCv(programador) {
    console.log(`El cv corresponde a ${programador.nombre}`);
}
enviarCv(dev2);
