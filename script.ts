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


type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroPowerScale = "local" | "planetario" | "galactico" | "universal"
const enableAnimation : boolean | number = 200 

type Hero = {
    readonly id?: HeroId ,
    name : string,
    age : number,
    isActive?: boolean
    powerScale? : HeroPowerScale
}

let hero : Hero = {
    name:"Carlos" ,
    age: 24
}


function createHero(hero:Hero) : Hero {
    const {name,age } = hero
    return{ id: crypto.randomUUID() , name, age , isActive: true }
}

const roman = createHero({name:"roman" , age:48 })

roman.powerScale = "local"

