class Vehiculo {
   private numPuertas :number ;
   private velocidad : number ;
   private marca: string ;

    constructor(numPuertas: number , velocidad:number , marca : string){
        this.marca = marca ;
        this.velocidad = velocidad ;
        this.numPuertas = numPuertas;
    }


    getNumeroPuertas() : number {
        return this.numPuertas;
    }

    setNumeroPuertas ( numPuertas:number){
        this.numPuertas = numPuertas
    }
}


const ferrari = new Vehiculo(2 , 300 , "Ferrari")
ferrari.setNumeroPuertas(2)


class Auto extends Vehiculo{
    private cantidadDeRuedas: number ;
    constructor(numPuertas: number , velocidad:number , marca : string ,cantidadDeRuedas:number){
        super(numPuertas,velocidad,marca);
        this.cantidadDeRuedas = cantidadDeRuedas
    }

    getCantidadRuedas():number{
        return this.cantidadDeRuedas
    }
    setCantidadRuedas(cantidadDeRuedas:number){
        this.cantidadDeRuedas = cantidadDeRuedas
    }
}

const bmw = new Auto(2,300,"Toyota",4)