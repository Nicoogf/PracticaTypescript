console.log("Nuevo archivo compilado")

const str1 : string = "Nicolas" ; 
const telefono : number = 2324 ; 
const activo : boolean = false ;
const noDefinido : undefined = undefined

enum DiasSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves =  "Jueves",
    Viernes = "Viernes",
    Sabado =  "Sabado",
    Domingo =  "Domingo"
}

function sumar ( a:number , b:number , nombre: string = "Default") {
    return `Buenos dias ${nombre} ${a} + ${b} `
}

console.log( sumar(4,4) )