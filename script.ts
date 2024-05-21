let nombre : string = "Miguel" ;

let auto = {
    modelo: 2002,
    color : "negro"
}

let texto = "hola"

let anyValue: unknown = "hola" ;

const persona = {name:"miguel" , age:30}

let cadenadetext = "hola"


function saludar(name : string){
    console.log(`hola ${name}`)
}

saludar("pepe")



function saludardos( persona:{name:string , edad:number}){
    const {name , edad } = persona
    console.log(`hola ${name} tengo ${edad}`)
}

saludardos({name:"adri" , edad:14})

function saludartres({name , edad } : {name:string , edad:number}):string{
    console.log(name, edad)
    return name
} 

const sayHiFromFunction = ( fn:(name:string)=>void ) =>{
    return fn("miguel")
}

sayHiFromFunction((name:string)=>{
    console.log(` hola soy ${name}`)
})


const sumar = (a:number, b:number) : number => {
    return a + b
}