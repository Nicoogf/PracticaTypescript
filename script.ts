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


// const jugadores = ["juan", "pedro" ,"marcos"]

// jugadores.forEach( jugador => {
//     console.log(jugador.toUpperCase())
// })

// type Hero = {
//     name : string,
//     age : number,
//     isActive: boolean
// }

// let hero : Hero = {
//     name:"Carlos" ,
//     age: 24
// }


// function CreateHero (hero: Hero) :Hero {
//     return { name, age , }
// }

// const superman = CreateHero("Superman", 14)


// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type HeroPowerScale = "local" | "planetario" | "galactico" | "universal"
// const enableAnimation : boolean | number = 200 

// type HeroBasicInfo = {
//     name : string,
//     age : number,
// }

// type HeroProperties = {
//     readonly id?: HeroId ,    
//     isActive?: boolean
//     powerScale? : HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// const heroe : Hero = {
//     name:"Adrian",
//     age:35,
//     id: crypto.randomUUID(),
//     isActive: true,
//     powerScale: "local"
// }

type HeroProperties = {
    isActive : boolean ,
    address : {
        planet: string,
        city: string
    }
}

const addresHero : HeroProperties["address"] = {
    city:"Madrid",
    planet: "Argentina"
}



const direccion = {
    calle : 25,
    altura : 124
}

type Direccion = typeof direccion

const DireccionCasa : Direccion = {
    calle: 106 ,
    altura:374
}

function crearAddress () {
    return {
        planet : "Tierra",
        city : "Barcelona"
    }
}

type Address =  ReturnType<typeof crearAddress>


const lenguajes:(string | number )[] = [] 

