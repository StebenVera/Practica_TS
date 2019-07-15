class Carro {

     //Variables de instacia o atributos 
     marca:string
     fechaCreacion:string
     color:string
     puertas:number
     kilometraje:number

    constructor(marca:string,fechaCreacion:string,color:string,puertas:number,kilometraje:number){
        this.marca = marca
        this.fechaCreacion = fechaCreacion
        this.color = color
        this.puertas = puertas
        this.kilometraje = kilometraje
        console.log(this,"This of document")
    }
    kilometrajeT(numero:number):void{
        console.log("Acumulador de kilometraje ",this.kilometraje = this.kilometraje+numero)
    }
}


//*****Creamos instancia de nuestral clase carro******/

let carro = new Carro("audi","27-08-18","rojo",4,100)

console.log(carro.color)
console.log(carro.kilometrajeT(50))


//***Herencia***/

class Consecionario extends Carro {

    
    
}

let conse = new Consecionario("audi","27-08-18","rojo",4,100)

