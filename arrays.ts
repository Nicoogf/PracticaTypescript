let arregloNumero: number[]= [ 1,2,3,4,5,6]
let arregloTexto: string[]=["hola","dos","tres"]

arregloTexto.indexOf("hola")




// type Programador = {
//     nombre : string ,
//     tecnologias : string [] ,
//     tomaMate?: boolean | null
// }

let dev:Programador = {
    nombre: "Nicolas",
    tecnologias: ["React" , "css" ] ,
    tomaMate : false
}

interface Programador{
    nombre: string,
    tecnologias : string[],
    tomaMate: boolean | null
}


let dev2 = {
    nombre : "Federico",
    tecnologias:  ["cobol"],
    tomaMate : null,
    apellido :"Gonzales"
}


function enviarCv( programador: Programador){
    console.log(`El cv corresponde a ${programador.nombre}`)
}

enviarCv(dev2)