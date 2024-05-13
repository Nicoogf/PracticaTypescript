let estudiaste : boolean =  true ;

if( estudiaste ) {
    console.log("Esta aprobado")
}else{
    console.log("esta desaprobado")
}

let interMiami : number = 11 ;
let dalas : number = 10 ;
let messi : number = 1 ;
let juegamessi : boolean = true 

let palabras : string = "Me emociona verlo a messi"

function jugar( equipo1: number , equipo2: number, juegamessi:boolean):void {
    let motivo : string = ""
    if( juegamessi) {
        equipo1 += messi
        motivo = "porque jugo messi"
    }
    if( juegamessi) equipo1 += messi
    if( equipo1 > equipo2 ) console.log( `gana inter de miami ${motivo}` )
    if( equipo1 == equipo2 ) console.log(`empatan`)
    if( equipo1 < equipo2 ) console.log(`gana dalas`)
        
}

jugar( interMiami , dalas , juegamessi)

let disney ; 
disney = "Boca"

console.log(disney)

disney = 1457 ;

console.log(disney)

disney = true ;

console.log( disney)